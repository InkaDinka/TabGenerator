import { useState } from 'react';
import { Document, Page} from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { Button, VStack} from '@chakra-ui/react'
import document from '../document.pdf';

import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function PdfViewer() {
    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);
    
    return (
        <>
        <VStack>
        <nav>
                <Button onClick={goToPrevPage}>
                    Prev
                </Button>
                <Button onClick={goToNextPage}>
                    Next
                </Button>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </nav>
                <Document
                    file={document}
                    onLoadSuccess={onDocumentLoadSuccess}
                    style={{}}
                >
                    <Page 
                    pageNumber={pageNumber}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    />
                </Document>
        </VStack>
        </>
    )
}

export default PdfViewer;