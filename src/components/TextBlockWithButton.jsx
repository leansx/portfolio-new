import "../styles/TextBlock.css";
import { Link } from "react-router";
// import styled from "styled-components";

// const StyledTextBlock;

function TextBlock({ title, description, button, link }) {
  return (
    <div className="text-block">
      <div className="header-with-button">
        <h2>{title}</h2>
        <Link to={link} target="_blank">
          <button>{button}</button>
        </Link>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default TextBlock;
