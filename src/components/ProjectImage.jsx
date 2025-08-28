import styled from "styled-components";
// import "../styles/ProjectImage.css";

const StyledProductImage = styled.div`
  background-color: ${(props) => [props.color]};
  background-image: url(${(props) => [props.image]});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-bottom-left-radius: var(--radius-lg);
  border-top-left-radius: var(--radius-lg);

  /* display: grid; */
  /* grid-template-rows: subgrid; */
  grid-column: 6/-1;
  height: 700px;
  grid-row: 1 /2;

  @media (max-width: 920px) {
    grid-column: 1/-1;
    grid-row: 2;
    margin-top: -4rem;

    border-bottom-right-radius: var(--radius-lg);
    border-top-left-radius: 0px;
  }

  @media (max-width: 500px) {
    grid-column: 1/-1;
    /* grid-row: 4 / -1; */
    border-bottom-right-radius: var(--radius-lg);
  }
`;

function ProjectImage({ color, image }) {
  return <StyledProductImage color={color} image={image} />;
}

export default ProjectImage;
