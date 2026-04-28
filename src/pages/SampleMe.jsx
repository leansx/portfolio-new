import Carousel from "../components/Carousel";
import ProjectDetails from "../components/ProjectDetails";
import ProjectImage from "../components/ProjectImage";
import TextBlock from "../components/TextBlock";
import projectdata from "../projects";
import "../styles/Project.css";
import "../styles/SampleMe.css";

// There needs to be a way I can turn the nav to white on this page
function SampleMe() {
  return (
    <div className="standard-grid project-grid">
      <div className="hero-grid">
        <ProjectDetails
          title={projectdata[3].title}
          date={projectdata[3].date}
          position={projectdata[3].position}
          color={projectdata[3].color}
          tags={projectdata[3].tags}
          description={
            "SampleMe approached me to overhaul their branding and website to better resonate with a luxury, established audience. Anticipating their move to Shopify’s headless framework, Hydrogen, I built a scalable design system in Figma that translated seamlessly into React’s native component structure, ensuring consistency, flexibility, and ease of replication across the site."
          }
        />

        <ProjectImage
          color={projectdata[3].color}
          image={projectdata[3].image}
        />
      </div>

      <section className="standard-grid supporting-material">
        {/* First section */}
        <div className="project-textblock">
          <TextBlock title={"Design System"} />
        </div>
        <div className="project-section-image">
          <div className="standard-grid sampleme-design-system">
            {/* Column 1 */}
            <div className="column-1">
              <div className="design-div_1 sampleme-img">
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/sampleme/sampleme_textrepeat.png" />
              </div>
              <div className="design-div_2 sampleme-img">
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/sampleme/sampleme_font.png" />
              </div>

              <div className="bottom-row-div sampleme-img">
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/sampleme/sampleme_colorslogo.png" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="column-2">
              <div className="design-div_400 sampleme-img">
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/sampleme/sampleme_body.png" />
              </div>
              <div className="design-div_400 sampleme-img">
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/sampleme/sampleme_waveform.png" />
              </div>
            </div>
          </div>
        </div>

        {/* Second section */}
        <div className="project-textblock">
          <TextBlock
            title={"Website"}
            description={
              "Building on my React experience, I applied those skills to Shopify’s Hydrogen framework—navigating its learning curve to deliver a customized solution. By extending the base theme with Shopify’s API, I preserved SampleMe’s dark, cyberpunk aesthetic while creating a compelling and immersive new user experience."
            }
          />
        </div>
        <div className="project-section-image">
          {/* Home Page */}
          <div className="sampleme-subtext">
            <span className="site-subtext">Home Page</span>
          </div>

          <div className="standard-grid site-grid">
            <div className="site-image_1_home">
              <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/sampleme/sampledesktophome_new.webp" />
            </div>
            <div className="site-image_2_home">
              <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/sampleme/samplemobilehome_new.webp" />
            </div>
          </div>

          {/* Product Page */}

          <div className="standard-grid site-grid">
            <div className="sampleme-subtext">
              <span className="site-subtext">Product Page</span>
            </div>
            <div className="site-image_1">
              <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/sampleme/samplemeProduct_mobile.webp" />
            </div>
            <div className="site-image_2">
              <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/sampleme/samplemeProduct_Desktop.webp" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SampleMe;
