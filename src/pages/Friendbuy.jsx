import Carousel from "../components/Carousel";
import ProjectDetails from "../components/ProjectDetails";
import ProjectImage from "../components/ProjectImage";
import projectdata from "../projects";
import TextBlock from "../components/TextBlock";
import Nav from "../components/Nav";
import "../styles/Project.css";
import "../styles/Friendbuy.css";

function Friendbuy() {
  return (
    <>
      {/* <Nav /> */}
      <div className="standard-grid">
        <div className="hero-grid">
          <ProjectDetails
            title={projectdata[0].title}
            date={projectdata[0].date}
            position={projectdata[0].position}
            color={projectdata[0].color}
            tags={projectdata[0].tags}
            description={
              "As Senior Graphic Designer, I take on a myriad of responsibilities. From client designs and communication, internal UI/UX optimization, and marketing and brand asset creation. I’ve worked with over 100+ brands, designing their referral program touchpoints to integrate seamlessly with their user experience."
            }
          />

          <ProjectImage
            color={projectdata[0].color}
            image={projectdata[0].image}
          />
        </div>

        <div className="carousel-text">
          <h3>
            Served over <span>100+</span> brands
          </h3>
        </div>
        <Carousel />
        <section className="standard-grid">
          {/* First section */}
          <div className="project-textblock">
            <TextBlock
              title={"Figma Design System"}
              description={
                "To improve internal processes, I led an audit of our feedback and design system and uncovered multiple redundant touchpoints that were slowing collaboration between Friendbuy and our clients. By redesigning the feedback flow in Figma, we reduced design onboarding time by 70%."
              }
            />
          </div>
          <div className="project-section-image halftone">
            <div className="friendbuy-grid">
              {/* Column 1 */}
              <div className="friendbuy-col-1">
                <div className="friendbuy-col-1-top friendbuy-image">
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/widgettemplate.webp" />
                </div>
                <div className="design-div_1 friendbuy-image">
                  <img src="/textvariables.webp" />
                </div>
                <div className="design-div_2 friendbuy-image">
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/colorvariables.webp" />
                </div>
              </div>

              {/* Column 2 */}
              <div className="friendbuy-col-2 ">
                <div className="design-div_400 friendbuy-image">
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/widgetvariables.webp" />
                </div>
              </div>
            </div>
          </div>

          {/* Second section */}
          <div className="project-textblock">
            <TextBlock
              title={"UI / UX"}
              description={
                "Working with Friendbuy’s engineering team, we collaborated in coming up with thoughtful solutions to make our user experience more robust and logical."
              }
            />
          </div>
          <div className="project-section-image">
            <div className="friendbuy-grid">
              <div className="fb-ui-section">
                <div className="fb-ui-title">
                  <span className="site-subtext">Old UI</span>
                </div>
                <div className="fb-ui--section-image-1">
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/fbreceiptold.webp" />
                </div>
                <div className="fb-ui--section-image-2">
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/fbuploaduiold.webp" />
                </div>
              </div>

              <div className="fb-ui-section">
                <div className="fb-ui-title">
                  <span className="site-subtext">New UI</span>
                </div>
                <div className="fb-ui--section-image-1">
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/fbreceiptnew.webp" />
                </div>
                <div className="fb-ui--section-image-2">
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/fbuploaduinew.webp" />
                </div>
              </div>
            </div>
          </div>
          {/* Third section */}
          <div className="project-textblock">
            <TextBlock
              title={"Marketing materials & illustrations"}
              description={
                "Tasked with extending Friendbuy’s branding, I developed a scalable design system that expanded our visual guidelines beyond their original limitations. This system enabled the creation of consistent illustrations and marketing materials for both internal and external use, giving the brand greater personality and flexibility."
              }
            />
          </div>
          <div className="project-section-image">
            <div className="friendbuy-grid">
              <div className="fb-marketing-col-1">
                <div>
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/bfcmfriendbuy.webp" />
                </div>
                <div>
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/ReceiptScanning.webp" />
                </div>
                <div>
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/Segmentation.webp" />
                </div>
              </div>
              <div className="fb-marketing-col-2">
                <div>
                  <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/friendbuy/casestudy.webp" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Friendbuy;
