import { Button, VStack, HStack} from '@chakra-ui/react'
import PdfModal from './PdfModal';

function PdfDownload() {
    //TODO: set up retrieving the file from the backend
    const downloadFile = () => {
        console.log("do something")
    }

    return (
    <>
        <VStack>
            <p>Finished generating tabs, you can now view them and download them below.</p>
            <HStack>
                <PdfModal/>
                <Button 
                    onClick={downloadFile}
                    >
                    Download
                </Button>
            </HStack>
        </VStack>
    </>
    );
}

export default PdfDownload;