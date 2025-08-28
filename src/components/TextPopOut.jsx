import "../styles/TextPopOut.css";

function TextPopOut({ title, first, second, placement }) {
  return (
    <div className={`${placement}`}>
      <h3>{title}</h3>
      <p>{first}</p>
      <p>{second}</p>
    </div>
  );
}

export default TextPopOut;
