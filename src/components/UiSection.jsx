import styled from "styled-components";

const StyledUiSection = styled.div`
  /*  */
  grid-column: ${(props) => (props.side ? "1/7" : "7/-1")};
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-columns: subgrid;

  @media (max-width: 920px) {
    grid-column: 1/-1;
    margin-bottom: 2rem;
    /* outlier */
    align-items: first baseline;
    background-color: ${(props) => [props.background]};
    padding: 2rem 0;
  }
`;

function UiSection({ background, side }) {
  return (
    <StyledUiSection background={background} side={side}>
      <div></div>
    </StyledUiSection>
  );
}

export default UiSection;
