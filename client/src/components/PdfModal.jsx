import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure, Button, } from '@chakra-ui/react';
import PdfViewer from './PdfViewer';

  function PdfModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>View Pdf</Button>
  
        <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Generated tabs for INSERT mp3 NAME</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <PdfViewer/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default PdfModal;
