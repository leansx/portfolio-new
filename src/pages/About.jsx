import Tag from "../components/Tag";
import TextBlock from "../components/TextBlock";
import "../styles/About.css";

function About() {
  return (
    <div className="standard-grid about-container">
      <div className="about-text">
        {/* Add "Let's Connect section here with LinkedIn" */}
        <h1 className="about-h1">Hi I'm Hannah</h1>
        <div className="about-text-block">
          <TextBlock
            title={"About Me"}
            description={
              "Originally from Pennsylvania I relocated to Florida to enjoy my favorite climate and beaches. In my free time I love to explore the art scene in my local town, watch Interstellar, or relax at the beach. My passions have always centered around art and design and I am truly grateful I get to make this a career. Lately, I’ve loved exploring the intersection of design and coding, utilizing React to build this website."
            }
          />
        </div>
        <div className="about-text-block">
          <TextBlock
            title={"What I Do"}
            description={`I’m a Senior Graphic Designer with a love for turning complex ideas into clear, thoughtful designs that people actually enjoy using. Over the years, I’ve had the chance to support SaaS, B2B, and consumer-facing companies—helping them create experiences that are not only functional but also visually engaging. Whether I’m collaborating with a team or taking the lead on independent projects, my goal is always the same: to design work that feels thoughtful, intentional, and impactful.
`}
          />
        </div>
        <button className="margin-button">My Resume</button>
        <div className="skills">
          <h3>Skills</h3>
          <div className="tags">
            <Tag title={"Graphic Design"} color="dark" size="large" />
            <Tag title={"UI/UX"} color="dark" size="large" />
            <Tag title={"Illustration"} color="dark" size="large" />
            <Tag title={"Web Design"} color="dark" size="large" />
          </div>
        </div>
      </div>
      <div className="about-image">
        <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/linkedinheadshot.jpg" />
      </div>
    </div>
  );
}

export default About;
