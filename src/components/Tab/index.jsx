import { useState, useEffect } from "react";
import PetitionPreview from "../Previewdocx";
import Form from "./form";
import "./styles.css";

function VerticalTabs(props) {
  const [activeTab, setActiveTab] = useState(0);

  const [index, setIndex] = useState(null);

  useEffect(() => {
    if (!index) {
      setIndex(props.data);
    }
  }, [props]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleTitle = (e) => {
    console.log(e);
  };

  const handleContent = (e) => {
    props.handleNewData(e);
  };

  return (
    <>
      {index && (
        <div className="vertical-tabs">
          <div className="tab-list">
            {index.map((tab, index) => (
              <div key={index}>
                {tab.title && (
                  <div
                    className={`tab-item d-flex ${
                      index === activeTab ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" />
                      </div>
                      {tab.title}
                    </>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="tab-panels">
            {index.map((tab, index) => (
              <div
                key={index}
                className={`tab-panel ${index === activeTab ? "active" : ""}`}
              >
                {tab.content.isDocs && (
                  <PetitionPreview
                    title={tab.title}
                    data={tab.data}
                    base64String={tab.content?.data?.base64String}
                  />
                )}
                {!tab.content.isDocs && (
                  <Form
                    name={tab.title}
                    data={tab.data}
                    handleTitle={(e) => handleTitle(e)}
                    handleContent={(e) => handleContent(e)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default VerticalTabs;
