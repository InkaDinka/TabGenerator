import React, { useState } from 'react';
// import axios from 'axios';
import {
  Box,
  Button,
  Input,
  useToast,
} from '@chakra-ui/react';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "No file selected.",
        description: "Please select an MP3 file to upload.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
    //   const response = await axios.post('YOUR_API_ENDPOINT', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //     responseType: 'blob',
    //   });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'guitar_tab.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();

      toast({
        title: "File converted successfully.",
        description: "Your guitar tab PDF has been downloaded.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error uploading file.",
        description: "There was an error converting your file. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error('Error uploading the file:', error);
    }
  };

  return (
    <Box 
        justifyContent='center'
        alignItems='center'
        display='flex'
        flexDirection='column'
        p={4}
    >
      <Input
        type="file"
        accept=".mp3"
        onChange={handleFileChange}
        mb={4}
        pt={1}
      />
      <Button
        colorScheme="blue"
        onClick={handleUpload}
      >
        Convert to Guitar Tab
      </Button>
    </Box>
  );
}

export default FileUpload;
