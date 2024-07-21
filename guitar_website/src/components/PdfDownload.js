import { useState } from 'react';
import { Document, Page} from 'react-pdf';
import { pdfjs } from 'react-pdf';
import document from '../document.pdf';
import DownloadButton from './DownloadButton';
import '../styles/PdfDownload.css';

import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function PdfDownload() {
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
    <div align='center'>
        <nav>
            <button onClick={goToPrevPage}>Prev</button>
            <button onClick={goToNextPage}>Next</button>
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
            <DownloadButton/>
    </div>
    );
}

export default PdfDownload;