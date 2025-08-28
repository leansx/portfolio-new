import "../styles/Puttanddoodle.css";
import projectdata from "../projects";
import ProjectDetails from "../components/ProjectDetails";
import ProjectImage from "../components/ProjectImage";
import TextBlock from "../components/TextBlock";
import "../styles/Project.css";

function Puttanddoodle() {
  return (
    <>
      {/* <Nav /> */}
      <div className="standard-grid">
        <div className="hero-grid">
          <ProjectDetails
            title={projectdata[3].title}
            date={projectdata[3].date}
            position={projectdata[3].position}
            color={projectdata[3].color}
            tags={projectdata[3].tags}
            description={
              "A project I will always cherish because I got to bring my father’s story to life. Using Adobe Illustrator I created full color illustrations for this 34 page children’s book. Book formatting was finalized in Adobe Indesign. Collaborating with our local printer, Maple Press, I went to various meetings to quality check the prints and binding of the final design. I learned so much in regards to print design with this project, and love the legacy it holds. Being able to gift friends and family a children’s book that you illustrated, and your Dad wrote, is an incredible feeling."
            }
          />

          <ProjectImage
            color={projectdata[3].color}
            image={projectdata[3].image}
          />
        </div>

        <section className="standard-grid">
          {/* First section */}
          <div className="project-textblock">
            <TextBlock title={"Cover & Inside"} />
          </div>
          <div className="project-section-image">
            <div className="project-section-image">
              <div className="friendbuy-grid standard-grid ">
                {/* Column 1 */}
                <div className="pd-cover-col-1">
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/puttanddoodle/pdfrontcover.webp" />
                </div>

                {/* Column 2 */}
                <div className="pd-cover-col-2 ">
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/puttanddoodle/inside_1.webp" />
                </div>
              </div>
            </div>
          </div>

          {/* Second section */}
          <div className="project-textblock">
            <TextBlock
              title={"Favorite Illustrations"}
              description={
                "As print was a new medium for me, I took on the challenge of creating and formatting the illustrations in Adobe Illustrator. Managing the full process, including quality checks, gave me real-time feedback on both layout execution and the application of the CMYK color profile, sharpening my skills in print production and quality assurance."
              }
            />
          </div>
          {/* Column 1 */}
          <div className="pd-illustrations-section">
            <div className="pd-illustrations-row">
              <div>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/puttanddoodle/pd_8.webp" />
              </div>
              <div>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/puttanddoodle/pd_23.webp" />
              </div>
              <div>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/puttanddoodle/pd_2.webp" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="pd-illustrations-row">
              <div>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/puttanddoodle/pd_24.webp" />
              </div>
              <div>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/puttanddoodle/pd_15.webp" />
              </div>
              <div>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/puttanddoodle/pd_28.webp" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Puttanddoodle;
