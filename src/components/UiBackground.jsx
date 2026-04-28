import styled from "styled-components";

const StyledUiBackground = styled.div`
  background-color: ${(props) => [props.background]};
  grid-column: 1/-1;
  grid-row: 1/-1;
  border-radius: ${(props) =>
    props.side ? "0px 30px 30px 0px" : "30px 0px 0px 30px"};
  height: 70%;
  align-self: center;

  @media (max-width: 920px) {
    display: none;
  }
`;

function UiBackground({ background, side }) {
  return (
    <StyledUiBackground background={background} side={side}>
      <div></div>
    </StyledUiBackground>
  );
}

export default UiBackground;
