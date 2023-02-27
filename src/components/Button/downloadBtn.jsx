const DownloadFile = (props) => {
  const handleDownload = async () => {
    const link = document.createElement("a");
    link.href = props.fileUrl;
    await link.setAttribute("download", "file");
    await document.body.appendChild(link);
    await link.click();
    await link.remove();
    // window.location.reload();
    props.onDownload();
  };

  return (
    <div>
      <button onClick={handleDownload} className={`CustomButton`}>
        Download File
      </button>
    </div>
  );
};

export default DownloadFile;
