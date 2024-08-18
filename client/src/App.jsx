import './App.css'
import { useState } from 'react'
import { Box, Heading } from "@chakra-ui/react";
import PdfDownload from './components/PdfDownload';
import UploadHub from './components/Upload';

function App() {
  const [pdfDownloadVisible, setpdfDownloadVisible] = useState(false);

  return (
    <Box
      height="90vh"
      color='offwhite'
    >
      <Heading 
        as='h1' 
        size='3xl'
        fontFamily='Oxygen'
        >Audio2Tabs</Heading>
      <Heading
        as='h2'
        size='l'
        fontFamily='Oxygen'
        mb={50}
      >A tool for generating guitar tabs from audio recordings.</Heading>
      <UploadHub/>
      { pdfDownloadVisible && <PdfDownload/> }
    </Box>
  );
}

export default App
