import "../styles/TextBlock.css";
import styled from "styled-components";

const StyledUiBackground = styled.div``;

function TextBlock({ title, description, descriptionTwo }) {
  return (
    <div className="text-block">
      <h2 className="title-block">{title}</h2>
      <p>{description}</p>
      {descriptionTwo ? (
        <p className="second-description">{descriptionTwo}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default TextBlock;
