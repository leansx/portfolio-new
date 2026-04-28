import styled from "styled-components";
import { Link } from "react-router";

const StyledTextBlock = styled.div`
  text-align: left;
`;

const StyledHeader = styled.header`
  margin-bottom: 0.5rem;
  font-size: ${(props) => (props.size ? "var(--font-h2)" : "var(--font-h3)")};
  letter-spacing: 2.4px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: ${(props) => (props.center ? "center" : "left")};
  /* Figure this margin prop out */
  margin-top: ${(props) => (props.second ? "2rem" : "0rem")};
`;

const StyledHeaderWithButton = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  @media (max-width: 920px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

function VariableTextBlock({
  title,
  description,
  descriptionTwo,
  size,
  link,
  button,
  second,
  center,
}) {
  return (
    <StyledTextBlock>
      {link ? (
        <StyledHeaderWithButton>
          <StyledHeader second={second} size={size} center={center}>
            {title}
          </StyledHeader>
          <a href={link} target="_blank">
            {/* Make a styled button? or just add margin to existing component */}
            <button>{button}</button>
          </a>
        </StyledHeaderWithButton>
      ) : (
        <StyledHeader size={size} second={second} center={center}>
          {title}
        </StyledHeader>
      )}

      <p>{description}</p>
      {descriptionTwo ? (
        <p className="second-description">{descriptionTwo}</p>
      ) : (
        ""
      )}
    </StyledTextBlock>
  );
}

export default VariableTextBlock;
