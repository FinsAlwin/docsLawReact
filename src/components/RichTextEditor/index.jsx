import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "./styles.css";

function RichTextEditor(props) {
  async function handleEditorChange(event, editor) {
    const data = editor.getData();
    props.handleRichData(data);
  }

  const editorConfig = {
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "|",
        "bulletedList",
        "numberedList",
        "|",
        "undo",
        "redo",
      ],
    },
  };

  return (
    <>
      <label className="p-2">Content</label>
      <CKEditor
        config={editorConfig}
        editor={ClassicEditor}
        data=""
        onChange={handleEditorChange}
        // onReady={(editor) => {
        //   console.log("Editor is ready to use!", editor);
        // }}
      />
    </>
  );
}

export default RichTextEditor;
