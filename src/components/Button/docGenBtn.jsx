export default function DocxGenButton(props) {
  const handleClick = () => {
    props.onClick();
  };
  return (
    <button className={`CustomButton shadow`} onClick={handleClick}>
      {props.name}
    </button>
  );
}
