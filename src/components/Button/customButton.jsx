export default function CustomButton(props) {
  return (
    <button type={props.type} className={`CustomButton shadow`}>
      {props.name}
    </button>
  );
}
