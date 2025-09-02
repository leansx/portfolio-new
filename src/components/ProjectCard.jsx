import "../styles/ProjectCard.css";
import Tag from "./Tag";
import styled from "styled-components";
import { Link } from "react-router";

const StyledProjectCard = styled.div`
  height: 600px;
  width: 400px;
  border-radius: var(--radius-sm);
  background-color: ${(props) => [props.color]};
  background-image: url(${(props) => [props.thumb]});
  /* background-position: ${(props) => [props.placement]}; */

  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
  position: relative;
  filter: drop-shadow(0 0 0.75rem var(--drop-shadow));
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(10px);
  }

  @media (max-width: 450px) {
    width: 100%;
    height: 400px;
  }
`;

const StyledProjectCardName = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  width: 100%;
  position: absolute;
  bottom: 0px;
  border-bottom-left-radius: var(--radius-sm);
  border-bottom-right-radius: var(--radius-sm);
`;

const Span = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: var(--font-h3);
  letter-spacing: var(--letter-h3);
`;

function ProjectCard({ link, title, color, thumb, tags, placement }) {
  return (
    <>
      <Link to={link}>
        <StyledProjectCard thumb={thumb} color={color} placement={placement}>
          <StyledProjectCardName>
            <Span>{title}</Span>
            <div className="project-tag-container">
              {tags.map((tag) => (
                <Tag title={tag} color="dark" size="small" key={tag} />
              ))}
            </div>
          </StyledProjectCardName>
        </StyledProjectCard>
      </Link>
      {/* <div className="project-card-container">
        Yo
        <div className="project-card-name-container">
          <div>
            <span className="project-card-name-title">{title}</span>
          </div>
          <div>
            <Tag title={"Graphic Design"} />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ProjectCard;
