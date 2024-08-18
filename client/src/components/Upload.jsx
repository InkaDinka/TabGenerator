import {VStack} from '@chakra-ui/react'
import Instructions from './Instructions';
import FileUpload from './FileUpload';

function UploadHub() {
    
    var uploadFileName = "";

    return (
        <>
            <VStack>
                <Instructions/>
                <FileUpload/>
            </VStack>
        </>
    )
}

export default UploadHub;