import "../styles/TextBlock.css";
function TextBlock({ title, description }) {
  return (
    <div className="text-block">
      <h2 className="title-block">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default TextBlock;
