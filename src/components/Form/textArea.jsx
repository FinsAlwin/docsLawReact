export default function CustomTextArea(props) {
  const handleChange = (e) => {
    props.onValueChange(e.target.value);
  };
  return (
    <div className="form-group p-2">
      {props.label && <label className="p-2">{props.label}</label>}
      <textarea
        required={props.isRequired}
        minLength={props.minLength}
        maxLength={props.maxLength}
        value={props.value}
        className={`form-control customInput`}
        rows={props.rows}
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
}
