import { Button, VStack} from '@chakra-ui/react'
import PdfModal from './PdfModal';

function PdfDownload() {
    //TODO: set up retrieving the file from the backend
    const downloadFile = () => {
        console.log("do something")
    }

    return (
    <>
        <VStack>
            <PdfModal/>
            <Button 
                colorScheme='blue'
                onClick={downloadFile}
                >
                Download
            </Button>
        </VStack>
    </>
    );
}

export default PdfDownload;