import React, { useState, useEffect } from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

const PetitionPreview = (props) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100">
        {props.title} Preview coming soon
      </div>
    </>
  );
};

export default PetitionPreview;
