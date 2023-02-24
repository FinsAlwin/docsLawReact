import React, { useState } from "react";
import Modal from "react-modal";
import DownloadFile from "../Button/downloadBtn";

const DownloadModal = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDownload = () => {
    // handle download logic here
  };

  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            background: "none",
          },
        }}
      >
        <div className="downloadContainer">
          <DownloadFile fileUrl={props.downloadUrl} />
        </div>
      </Modal>
    </div>
  );
};

export default DownloadModal;
