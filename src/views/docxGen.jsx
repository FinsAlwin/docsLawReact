import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VerticalTabs from "../components/Tab";
import DocxGenButton from "../components/Button/docGenBtn";
import DownloadModal from "../components/download/downloadFile";

const DocxGen = () => {
  const { id } = useParams();

  const [newData, setNewData] = useState([]);

  const [data, setData] = useState(null);

  const [prevData, setPrevData] = useState(null);

  const [downloadUrl, setDownloadUrl] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const getLocal = localStorage.getItem("data");

  useEffect(() => {
    if (getLocal) {
      getInit(JSON.parse(getLocal));
      setPrevData(JSON.parse(getLocal));
    }
  }, [getLocal]);

  const getInit = async (payload) => {
    const res = await fetch(
      `http://docs-law-back-dev.ap-south-1.elasticbeanstalk.com/api/v1/initDocx`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(payload),
      }
    );
    const dataRes = await res.json();
    if (res.status == 200) {
      setData(dataRes.data);
    }
  };

  const handleGenDocx = async () => {
    const payload = {
      ...prevData,
      newContent: newData,
    };

    const res = await fetch(
      `http://docs-law-back-dev.ap-south-1.elasticbeanstalk.com/api/v1/genDocx`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(payload),
      }
    );

    const dataRes = await res.json();

    if (res.status == 200) {
      await setDownloadUrl(dataRes.download_url);
    }
  };

  const handleNewData = (newObject) => {
    // Check if object with the same key name already exists in the array
    const existingObjectIndex = newData.findIndex(
      (obj) => obj.name === newObject.name
    );
    if (existingObjectIndex === -1) {
      // If object with the same key name doesn't exist, add the new object to the array
      setNewData([...newData, newObject]);
    } else {
      // If object with the same key name already exists, update the object in the array
      const updatedArray = [...newData];
      updatedArray[existingObjectIndex] = newObject;
      setNewData(updatedArray);
    }
  };

  useEffect(() => {
    if (downloadUrl.length !== 0) {
      setModalIsOpen(true);
    } else {
      setModalIsOpen(false);
    }
  }, [downloadUrl]);

  const onDownload = () => {
    if (modalIsOpen) {
      setModalIsOpen(false);
    }
  };

  return (
    <>
      <DownloadModal
        modalIsOpen={modalIsOpen}
        downloadUrl={downloadUrl}
        onDownload={onDownload}
      />
      <div className="container-fluid d-flex flex-column w-100">
        <div className="w-100 d-flex justify-content-end p-4">
          <DocxGenButton
            name="Generate Docx"
            type="submit"
            onClick={handleGenDocx}
          />
        </div>
        <VerticalTabs data={data} handleNewData={(e) => handleNewData(e)} />
      </div>
    </>
  );
};

export default DocxGen;
