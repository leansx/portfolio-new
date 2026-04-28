import Carousel from "../components/Carousel";
import ProjectDetails from "../components/ProjectDetails";
import ProjectImage from "../components/ProjectImage";
import projectdata from "../projects";
import TextBlock from "../components/TextBlock";
import Nav from "../components/Nav";
import "../styles/Project.css";
import "../styles/Ring.css";
import TextPopOut from "../components/TextPopOut";
import RingCarousel from "../components/RingCarousel";
import RingHighlight from "../components/RingHighlight";
import VariableTextBlock from "../components/VariableTextBlock";

function Ring() {
  return (
    <>
      {/* <Nav /> */}
      <div className="standard-grid">
        <div className="hero-grid">
          <ProjectDetails
            title={projectdata[2].title}
            date={projectdata[2].date}
            position={projectdata[2].position}
            color={projectdata[2].color}
            tags={projectdata[2].tags}
            description={
              "This personal project was an opportunity to sharpen my UI/UX skills while reimagining an app I use daily. I identified three core components to redesign, improving usability and overall user experience. Through this process, I deepened my understanding of app design, user navigation, and journey mapping—culminating in a detailed case study that outlines key touchpoints across the user flow."
            }
          />

          <ProjectImage
            color={projectdata[2].color}
            image={projectdata[2].image}
          />
        </div>

        <section className="standard-grid">
          {/* First section */}
          <div className="project-textblock">
            <VariableTextBlock
              title={"identifying pain points"}
              size={true}
              description={
                "Users of the Ring app report frustration when trying to locate key settings, view a daily event summary, or enable modes. By introducing an event summary feature within Live View, surfacing important settings upfront, and reducing friction around activating and understanding modes, users will feel more confident and empowered when using the app, knowing they can easily find what they need and make full use of its features."
              }
            />
          </div>
          <div className="pain-point-section-new">
            <RingHighlight
              image={
                "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_homescreen_before.webp"
              }
              title={"Home Screen"}
              paragraphOne={`1. This mode section takes up too much screen and there is no easy way to learn what these modes do. I recorded that 10 clicks were needed to learn what this feature does! And in order to enable this feature, you need to go through their help sequence, every time. `}
              paragraphTwo={`2. Clicking on these 3 dots gives you minimal control, creating another chokepoint and unnecessary clicks to get to what the user needs.`}
            />
            <RingHighlight
              image={
                "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_livescreen_before.webp"
              }
              title={"Live View"}
              paragraphOne={`3. It is not easy to access an event summary from the day if you want to scrub through motion of the currently selected camera.`}
              paragraphTwo={`4. Within the live camera view, you have to click on this "more" menu icon to access downloading and sharing.`}
            />
            <RingHighlight
              image={
                "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_settingscreen_before.webp"
              }
              title={" Camera Settings"}
              paragraphOne={`5. Battery percentage is hidden, with the user having to click on "Power Settings" to access this information.`}
              paragraphTwo={`6. These settings aren't optimized for what a user is looking for. Options relating to the device's settings and health should be higher on the list`}
            />
          </div>

          <div className="ring-mode-section">
            <div className="ring-mode-textblock">
              <div className="ring-mode-textblock-newgrid">
                <TextBlock
                  title={"a tootsie pop?"}
                  description={
                    "I wanted to demonstrate exactly how tedious turning on modes is. To the right, you can click through the journey a user has to take. Like the age old adage, “How many licks does it take to get to the center of a Tootsie Pop?” but this experience is far less enjoyable."
                  }
                />
              </div>

              <div className="ring-mode-textblock-mobile">
                <TextBlock
                  title={"a tootsie pop?"}
                  description={
                    "I wanted to demonstrate exactly how tedious turning on modes is. Below, you can swipe through the journey a user has to take. Like the age old adage, “How many licks does it take to get to the center of a Tootsie Pop?” but this experience is far less enjoyable."
                  }
                />
              </div>
            </div>

            <RingCarousel />
          </div>

          {/* Resolution Section */}
          <div className="ring-project-textblock">
            {/* <TextBlock title={"Creating solutions that were user first"} /> */}

            <VariableTextBlock
              title={"Creating solutions that were user first"}
              size={true}
              center={true}
            />
          </div>

          {/* Home Screen */}
          <div className="ring-mocks-section">
            <div className="ring-mock-text">
              <VariableTextBlock
                title={"quick camera settings"}
                description={
                  "The redesign surfaces more key information upfront, allowing users to take action without digging into the settings screen. For example, I often wanted to disable motion detection at specific times, but previously had to navigate all the way to settings. With the new quick-view feature, I can easily toggle it on or off while also seeing battery life, connection status, and mode at a glance. I also incorporated a camera visual to create a more modern and aesthetic experience."
                }
              />
            </div>
            {/* First Section */}
            <div className="ring-mocks-right-section">
              <div className="ring-mocks-blue-bg"></div>
              <div className="ring-mocks-col-1 phone">
                <span className="site-subtext light-on-dark ">Old UI</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_homesettingsopen.webp" />
              </div>
              <div className="ring-mocks-col-2 phone">
                <span className="site-subtext light-on-dark ">Redesign</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_redesign_popout2.webp" />
              </div>
            </div>
            <div className="ring-section-break"></div>

            {/* Modes */}
            <div className="ring-mock-text-right-mobile ">
              <VariableTextBlock
                title={"Modes"}
                description={
                  "On the home screen, the Modes section takes up about 50% less than the previous design. There is also an i icon directly next to the Mode name, which will take the user directly to the Mode settings. Mode Settings are also accessible in the right side hamburger menu. The user no longer has to go through a how to every time they want to enable modes. If they need more information about modes, they can click on the button “What Are Modes” at the top of the screen. From here the user can enable modes, and also click through to customize modes for each camera."
                }
              />
            </div>
            <div className="ring-mocks-left-section">
              <div className="ring-mocks-blue-bg-left"></div>
              <div className="ring-mocks-col-1-left phone">
                <span className="site-subtext light-on-dark ">Home</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_modeshome_redesign.webp" />
              </div>
              <div className="ring-mocks-col-2-left phone">
                <span className="site-subtext light-on-dark ">Settings</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_modessettings_redesign.webp" />
              </div>
            </div>
            <div className="ring-mock-text-right-desktop">
              <VariableTextBlock
                title={"Modes"}
                description={
                  "On the home screen, the Modes section takes up about 50% less than the previous design. There is also an i icon directly next to the Mode name, which will take the user directly to the Mode settings. Mode Settings are also accessible in the right side hamburger menu. The user no longer has to go through a how to every time they want to enable modes. If they need more information about modes, they can click on the button “What Are Modes” at the top of the screen. From here the user can enable modes, and also click through to customize modes for each camera."
                }
              />
            </div>

            <div className="ring-section-break"></div>

            {/* Camera Settings */}

            <div className="ring-mock-text">
              <VariableTextBlock
                title={"camera settings"}
                description={
                  "This view was modernized to highlight the camera with a cleaner, more spacious layout. Interactive settings, such as toggling motion detection, now have greater visibility, while battery percentage and a clear online status indicator are displayed upfront. The settings at the bottom of the screen were reorganized so the most useful features appear at the top for quicker access."
                }
              />
            </div>
            <div className="ring-mocks-right-section">
              <div className="ring-mocks-blue-bg"></div>
              <div className="ring-mocks-col-1 phone">
                <span className="site-subtext light-on-dark ">Old UI</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_settings.webp" />
              </div>
              <div className="ring-mocks-col-2 phone">
                <span className="site-subtext light-on-dark ">Redesign</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_redesign_settings2.webp" />
              </div>
            </div>
            <div className="ring-section-break"></div>

            {/* Live View */}
            <div className="ring-mock-text-right-mobile ">
              <VariableTextBlock
                title={"Live view"}
                description={
                  "For the live view, the updated UI provides quicker access to key features without requiring extra menu navigation. An Event Summary tab was added at the bottom, allowing users to instantly see snapshots of events and download, share, or delete them with ease. Previously, users had to scrub through the motion timeline and wait for the 'More' option to appear before taking any action."
                }
              />
            </div>
            <div className="ring-mocks-left-section">
              <div className="ring-mocks-blue-bg-left"></div>
              <div className="ring-mocks-col-1-left phone">
                <span className="site-subtext light-on-dark ">Old UI</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_live.webp" />
              </div>
              <div className="ring-mocks-col-2-left phone">
                <span className="site-subtext light-on-dark ">Redesign</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/ring/ring_liveview_redesign4.webp" />
              </div>
            </div>
            <div className="ring-mock-text-right-desktop">
              <VariableTextBlock
                title={"Live view"}
                description={
                  "For the live view, the updated UI provides quicker access to key features without requiring extra menu navigation. An Event Summary tab was added at the bottom, allowing users to instantly see snapshots of events and download, share, or delete them with ease. Previously, users had to scrub through the motion timeline and wait for the 'More' option to appear before taking any action."
                }
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Ring;
