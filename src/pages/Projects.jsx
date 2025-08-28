import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";
import projectdata from "../projects";

//

function Projects() {
  return (
    <div className="standard-grid project-page-container">
      <div className="project-page-cards">
        {projectdata.map((project) => (
          <ProjectCard
            title={project.title}
            image={project.image}
            color={project.color}
            link={project.link}
            tags={project.tags}
            key={project.title}
            thumb={project.thumb}
            placement={project.placement}
          />
        ))}

        {/* <ProjectCard title={"Friendbuy"} />
        <ProjectCard title={"SampleMe"} />
        <ProjectCard title={"Putt & Doodle"} />
        <ProjectCard title={"Anti Map"} /> */}
      </div>
    </div>
  );
}

export default Projects;
