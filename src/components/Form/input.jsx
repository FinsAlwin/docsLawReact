export default function CustomInput(props) {
  const handleChange = (e) => {
    props.onValueChange(e);
  };
  return (
    <>
      <div className="form-group p-2">
        {props.label && <label className="p-2">{props.label}</label>}

        <input
          type={props.type}
          required
          minLength={props.minLength}
          maxLength={props.maxLength}
          className={`form-control customInput`}
          placeholder={props.placeholder}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
}
