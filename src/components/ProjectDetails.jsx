import styled from "styled-components";
import "../styles/ProjectDetails.css";
import Tag from "./Tag";
// import projectdata from "../projects";

const StyledProjectDetailsContainer = styled.div`
  grid-column: 2 /7;
  grid-row: 1 /2;
  height: fit-content;
  border-left: 5px solid ${(props) => [props.color]};
  padding: 50px;
  background-color: var(--background);
  filter: drop-shadow(0 0 0.75rem var(--drop-shadow));
  justify-content: center;
  margin: auto;

  @media (max-width: 1200px) {
    grid-column: 2/8;
  }

  @media (max-width: 920px) {
    grid-column: 2/-2;
    margin: 0;
  }

  @media (max-width: 540px) {
    padding: 1.5rem;
  }
`;

function ProjectDetails({ title, date, position, description, color, tags }) {
  return (
    <StyledProjectDetailsContainer color={color}>
      <div className="tags">
        {tags.map((tag) => (
          <Tag title={tag} key={tag} color="light" size="large" />
        ))}
        {/* <Tag title={"UI/UX"} color="light" size="large" />
        <Tag title={"Graphic Design"} color="light" size="large" />
        <Tag title={"Web Design"} color="light" size="large" /> */}
      </div>
      <div className="project-details">
        <h1>{title}</h1>
        <span className="date">{date}</span>
        <span className="position">{position}</span>
        <p className="description">{description}</p>
      </div>
    </StyledProjectDetailsContainer>
  );
}

export default ProjectDetails;
