import CustomInput from "../Form/input";
import RichTextEditor from "../RichTextEditor";
import CustomButton from "../Button/customButton";
import { useState, useEffect } from "react";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [richText, setRichText] = useState("");

  const handleTitle = (e) => {
    setTitle(e);
  };

  const handleRichData = (e) => {
    setRichText(e);
  };

  useEffect(() => {
    const data = {
      name: props.name,
      title: title,
      richText: richText,
    };

    if (title || richText) {
      props.handleContent(data);
    }
  }, [title, richText]);

  return (
    <>
      <CustomInput
        label="Title*"
        type="text"
        isRequired={true}
        minLength={3}
        maxLength={25}
        placeholder="Title"
        onValueChange={(e) => handleTitle(e)}
      />
      <RichTextEditor handleRichData={(e) => handleRichData(e)} />
    </>
  );
}
