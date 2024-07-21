import document from '../document.pdf';

function DownloadButton() {
    const downloadFile = () => {
        window.location.href = {document}
      }
      return (
                <button onClick={downloadFile}>Download</button>)
}

export default DownloadButton