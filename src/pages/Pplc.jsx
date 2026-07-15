import Carousel from "../components/Carousel";
import ProjectDetails from "../components/ProjectDetails";
import ProjectImage from "../components/ProjectImage";
import projectdata from "../projects";
import TextBlock from "../components/TextBlock";
import TextBlockWithButton from "../components/TextBlockWithButton";
import Nav from "../components/Nav";
import "../styles/Project.css";
import "../styles/Ring.css";
import "../styles/Pplc.css";
import TextPopOut from "../components/TextPopOut";
import RingCarousel from "../components/RingCarousel";
import RingHighlight from "../components/RingHighlight";
import UiBackground from "../components/UiBackground";
import VariableTextBlock from "../components/VariableTextBlock";
import { Variable } from "lucide-react";

function Pplc() {
  return (
    <>
      {/* <Nav /> */}
      <div className="standard-grid">
        <div className="hero-grid">
          <ProjectDetails
            title={projectdata[1].title}
            date={projectdata[1].date}
            position={projectdata[1].position}
            color={projectdata[1].color}
            tags={projectdata[1].tags}
            description={
              <>
                <p>
                  PPLC stands for the Pinellas Public Library Cooperative.
                  Spanning over 14 libraries, the PPLC app allows library card
                  holders to digitally access all of Pinellas County’s library
                  resources. Users are able to search the catalog, place holds,
                  view current checkouts, their member status, and find more
                  information about all the Pinellas county libraries.
                </p>
                <br></br>
                <p>
                  I chose this as a personal project because I use this app
                  almost everyday. In using it everyday I’ve become familiar
                  with its quirks, shortcomings, and things it does really well.
                  I wanted to try my hand at a fresh redesign to make it more
                  useful and intuitive for its wide range of users.
                </p>
              </>
            }
          />

          <ProjectImage
            color={projectdata[1].color}
            image={projectdata[1].image}
          />
        </div>
        <div className="ring-break-small"></div>

        <section className="standard-grid">
          {/*Houston We Have a Problem */}
          <div className="ring-mocks-section">
            <div className="ring-mock-text">
              <VariableTextBlock
                title={"Houston We Have A Problem"}
                size={true}
                description={
                  <>
                    <p>
                      My original audit of the app uncovered an outdated
                      interface, lackluster search, and frustration in finding
                      free resources.
                    </p>
                    <br></br>
                    <p>
                      App reviews were used to get another snapshot of the
                      problems users encountered. A user survey was then
                      created, guided by the pain points highlighted within the
                      reviews, my audit, and expanded based on competitor app
                      research. The results echoed the frustrations expressed in
                      the reviews. Users voiced
                      <strong> difficulty finding what they needed </strong>
                      within the search,
                      <strong> features they expected </strong>
                      but were unavailable, and
                      <strong> invisibility of free resources </strong>available
                      to them as library card holders.
                    </p>
                  </>
                }
              />
              <VariableTextBlock
                title={"We have our heading"}
                second={true}
                description={
                  <>
                    <p>
                      <ul>
                        <li>
                          1. Make the search function easier to use and return
                          high quality results that are actionable.
                        </li>
                        <li>
                          2. Increase the visibility of free resources available
                          to library card holders.
                        </li>
                        <li>
                          3. Add quality of life updates that increase the
                          consistency of the app inline with current user
                          expectations.
                        </li>
                      </ul>
                    </p>
                  </>
                }
              />
            </div>
            {/* Mocks */}
            <div className="ring-mocks-no-blue">
              <div className="ring-mocks-static-img">
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/appreviews.webp" />
              </div>
            </div>
          </div>
          <div className="ring-break-small"></div>

          {/* First section */}
          <div className="ring-project-textblock">
            <VariableTextBlock
              title={"Quality of life updates"}
              // button={"Explore The Design System"}
              // link={
              //   "https://www.figma.com/design/QCEtdPPjQ34L1zEHCmtKVQ/PPLC-Case-Study?node-id=61-258"
              // }
              description={
                "A completely reworked design system was created to modernize and maintain consistency without straying too far from the original interface."
              }
              size={true}
            />
          </div>
          <div className="pain-point-section-new">
            <RingHighlight
              image={
                "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/HiFi_BottomMenu.webp"
              }
              title={"Bottom Nav"}
              paragraphOne={`A bottom nav was added to certain screens providing fast access to key areas of the app. Before, most of these options were hidden behind a hamburger menu. Surfacing them in a bottom nav aligned with common mobile patterns, making the navigation change feel familiar, and reduced the amount of clicks the user had to take to get to high traffic areas.`}
            />
            <RingHighlight
              image={
                "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/Hi_Fi_PreferredLibrarynew.webp"
              }
              title={"Preferred Library"}
              paragraphOne={`Introducing a “Preferred Library” component enabled a more relevant and efficient search experience. Users can now set a default location, allowing catalog results to be tailored based on real-time availability at their selected branch.`}
            />
            <RingHighlight
              image={
                "https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/HiFi_Notifications.webp"
              }
              title={"Notifications"}
              paragraphOne={`Notifications for item availability, holds, and important account updates transformed a previously manual experience into a proactive one. Instead of repeatedly checking the app for status updates, users are now informed in real time.`}
            />
          </div>

          <div className="ring-break-small"></div>

          {/* Resolution Section */}
          <div className="ring-project-textblock">
            {/* <TextBlock title={"Creating solutions that were user first"} /> */}
            <VariableTextBlock
              title={"Improving the search experience"}
              description={
                "Search functionality was the crown jewel of the project. As the most used feature in the app, it needed to serve its purpose in a way that delighted and empowered users."
              }
              size={true}
            />
          </div>

          {/* Home Screen */}
          <div className="ring-mocks-section">
            <div className="ring-mock-text">
              <VariableTextBlock
                title={"Filtering"}
                description={
                  "In a quest to make the search function easier to use, and return high quality results, I borrowed patterns from popular modern apps. I deduced that users expected more filtering options when initiating a search, and the ability to reuse previous search terms. Now when the user engages the search bar, a dedicated interface is revealed, exposing filtering options and previous searches. Before, users could only filter down after they had submitted a search."
                }
              />
            </div>
            {/* First Section */}
            <div className="pplc-mocks-right-section">
              {/* Testing here  <div className="ring-mocks-blue-bg"></div> */}
              <UiBackground background={projectdata[1].color}></UiBackground>
              <div className="ring-mocks-col-1 phone">
                <span className="site-subtext  ">Search Focus</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/HiFi_Search_Focus.webp" />
              </div>
              <div className="ring-mocks-col-2 phone">
                <span className="site-subtext ">Filtering</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/HiFi_Filter_Sort.webp" />
              </div>
            </div>
            <div className="ring-break-small"></div>

            {/* Modes */}
            <div className="ring-mock-text-right-mobile">
              <VariableTextBlock
                title={"Results & Actionability"}
                description={
                  <>
                    <p>
                      Surfacing key information and popular actions reduced the
                      amount of effort users had to make to obtain a catalog
                      item. Before, to find call number information,
                      availability, or initiate a hold, users had to click into
                      an item. I wanted to satisfy both high and low intent
                      users, making obtaining catalog items quick and easy,
                      while also supporting a rich browsing experience.
                    </p>
                    <br></br>
                    <p>
                      The new “Only Show Available” filter returns items
                      currently available at a user’s preferred library and
                      works in synergy with the new “On shelf” component,
                      exposing the exact location of a catalog item to the user.
                    </p>
                  </>
                }
              />
            </div>
            <div className="pplc-mocks-left-section">
              {/* <div className="ring-mocks-blue-bg-left"></div> */}
              <UiBackground
                background={projectdata[1].color}
                side={"left"}
              ></UiBackground>
              <div className="ring-mocks-col-1-left phone">
                <span className="site-subtext  ">Search Results</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/HiFi_Search_Results_ActiveLibrary.webp" />
              </div>
              <div className="ring-mocks-col-2-left phone">
                <span className="site-subtext  ">Expanded</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/HiFi_SearchResultsExpanded_Fixed.webp" />
              </div>
            </div>
            <div className="ring-mock-text-right-desktop">
              <VariableTextBlock
                title={"Results & Actionability"}
                description={
                  <>
                    <p>
                      Surfacing key information and popular actions reduced the
                      amount of effort users had to make to obtain a catalog
                      item. Before, to find call number information,
                      availability, or initiate a hold, users had to click into
                      an item. I wanted to satisfy both high and low intent
                      users, making obtaining catalog items quick and easy,
                      while also supporting a rich browsing experience.
                    </p>
                    <br></br>
                    <p>
                      The new “Only Show Available” filter returns items
                      currently available at a user’s preferred library and
                      works in synergy with the new “On shelf” component,
                      exposing the exact location of a catalog item to the user.
                    </p>
                  </>
                }
              />
            </div>

            <div className="ring-section-break"></div>

            <div className="ring-project-textblock">
              <VariableTextBlock
                title={"Let The People Know"}
                description={
                  <>
                    <strong>Two thirds of users</strong> reported that they were
                    unaware of access to free learning resources within the app,
                    museum passes, and that they struggled to find library
                    location and hours. This uncovered a huge gap in visibility
                    for a majority of users, considering that some of these
                    features were available directly on the home screen.
                  </>
                }
                size={true}
              />
            </div>

            {/* Home Screen */}

            <div className="ring-mock-text">
              <VariableTextBlock
                title={"Home Screen"}
                description={
                  <>
                    <p>
                      Shifting high-traffic actions into dedicated interface
                      components, like the bottom navigation, allowed us to
                      increase the visibility of home screen features that users
                      previously reported as difficult to find or were unaware
                      of altogether. In the previous interface, the home screen
                      relied heavily on a dense, text-based list that forced
                      users to depend on comprehension rather than
                      recognition.{" "}
                    </p>
                    <br></br>
                    <p>
                      The redesign prioritizes recognition over recall by
                      pairing clear iconography with concise, descriptive
                      labels. Updated language played a critical role in setting
                      accurate expectations for users. For example, the previous
                      label “My Barcode” created ambiguity, as “barcode” is also
                      associated with catalog search functionality. Renaming
                      this action to “Show library card” removes that ambiguity
                      and more clearly communicates the outcome of the
                      interaction.
                    </p>
                    <br></br>
                    <p>
                      By improving labeling clarity and strengthening visual
                      cues, the home screen now enables faster decision-making,
                      reduces user frustration, and increases the visibility of
                      core features.
                    </p>
                  </>
                }
              />
            </div>

            <div className="pplc-mocks-right-section">
              {/* <div className="ring-mocks-blue-bg"></div> */}
              <UiBackground background={projectdata[1].color}></UiBackground>
              <div className="ring-mocks-col-1 phone">
                <span className="site-subtext  ">Old UI</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/OldApp_Home.webp" />
              </div>
              <div className="ring-mocks-col-2 phone">
                <span className="site-subtext  ">Redesign</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/HiFi_Home.webp" />
              </div>
            </div>
            <div className="ring-break-small"></div>
            {/* Library Finder */}
            <div className="ring-mock-text-right-mobile">
              <VariableTextBlock
                title={"Locating a library"}
                description={
                  <>
                    <p>
                      Renaming “Nearest Libraries” to “Find a Library” shifted
                      the label to a more action-oriented pattern, setting
                      clearer expectations for the user.
                    </p>
                    <br></br>

                    <p>
                      Previously, the experience relied on a dense list view
                      that lacked spatial context, making it difficult for users
                      to understand where libraries were located in relation to
                      them. Users would have to click into each library to get
                      address info, and then could click again to open the view
                      in their native map app.
                    </p>
                    <br></br>
                    <p>
                      Through competitor research, I found that most
                      applications offering location-based features include a
                      map view as a primary way to explore nearby options.
                      Adopting this familiar pattern increased both usability
                      and comprehension, as users could rely on an interaction
                      model they already understood.
                    </p>
                  </>
                }
              />
            </div>
            <div className="pplc-mocks-left-section">
              {/* <div className="ring-mocks-blue-bg-left"></div> */}
              <UiBackground
                background={projectdata[1].color}
                side={"left"}
              ></UiBackground>
              <div className="ring-mocks-col-1-left phone">
                <span className="site-subtext  ">Old UI</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/OldApp_LibrarySearch.webp" />
              </div>
              <div className="ring-mocks-col-2-left phone">
                <span className="site-subtext  ">Redesign</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/HiFi_LibraryLocation.webp" />
              </div>
            </div>

            {/* Need a different break between mocks that are explaining grouped things especially on mobile */}
            <div className="ring-mock-text-right-desktop">
              <VariableTextBlock
                title={"Locating a library"}
                description={
                  <>
                    <p>
                      Renaming “Nearest Libraries” to “Find a Library” shifted
                      the label to a more action-oriented pattern, setting
                      clearer expectations for the user.
                    </p>
                    <br></br>

                    <p>
                      Previously, the experience relied on a dense list view
                      that lacked spatial context, making it difficult for users
                      to understand where libraries were located in relation to
                      them. Users would have to click into each library to get
                      address info, and then could click again to open the view
                      in their native map app.
                    </p>
                    <br></br>
                    <p>
                      Through competitor research, I found that most
                      applications offering location-based features include a
                      map view as a primary way to explore nearby options.
                      Adopting this familiar pattern increased both usability
                      and comprehension, as users could rely on an interaction
                      model they already understood.
                    </p>
                  </>
                }
              />
            </div>
            <div className="ring-section-break"></div>

            <div className="ring-project-textblock">
              <VariableTextBlock
                title={"Museum Passes"}
                description={
                  "To check out a museum pass, users need to physically retrieve them from the library. The previous interface grouped museum passes in with the general library catalog, with no way to filter specifically for passes. Searches for museums often returned lists of books or other catalog items, and when a user finally found a pass, they needed to click into the details to discover its availability."
                }
                size={true}
              />
            </div>

            {/* Museum Pass In-person view */}

            <div className="ring-mock-text">
              <VariableTextBlock
                title={"Mirroring the in-person experience"}
                description={
                  "A physical board of available museum passes greets you upon entering the library. I was inspired to emulate this experience within the app, allowing the addition to feel familiar. In person, you get access to an overview of passes, their status, as well as when the pass will become available if it is checked out."
                }
              />
            </div>
            <div className="ring-mocks-no-blue">
              <div className="ring-mocks-static-img">
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/museuminperson.webp" />
              </div>
            </div>
            <div className="ring-break-small"></div>
            {/* Museum Interface */}
            <div className="ring-mock-text-right-mobile ">
              <VariableTextBlock
                title={"The interface"}
                description={
                  "Giving Museum passes their own dedicated space not only increased their visibility and access, it significantly reduced the friction between users finding a pass, and checking one out. Users can see all passes at a glance, search the list, and filter by passes available to them at their preferred library. If a pass is unavailable at their preferred library, they can easily see what libraries the pass is available at, as well as when the pass will become available. Shifting the interface to provide clarity on when and where users can check out a physical pass greatly reduced the frustration and confusion caused by passes previously being discoverable in a search for resources that could be put on hold and picked up at leisure."
                }
              />
            </div>
            <div className="pplc-mocks-left-section">
              {/* <div className="ring-mocks-blue-bg-left"></div> */}
              <UiBackground
                background={projectdata[1].color}
                side={"left"}
              ></UiBackground>
              <div className="ring-mocks-col-1-left phone">
                <span className="site-subtext  ">Old UI</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/OldApp_MuseumPassSearch.webp" />
              </div>
              <div className="ring-mocks-col-2-left phone">
                <span className="site-subtext  ">Redesign</span>
                <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/PPLC/HiFi_MuseumPasses.webp" />
              </div>
            </div>
            <div className="ring-mock-text-right-desktop">
              <VariableTextBlock
                title={"The interface"}
                description={
                  "Giving Museum passes their own dedicated space not only increased their visibility and access, it significantly reduced the friction between users finding a pass, and checking one out. Users can see all passes at a glance, search the list, and filter by passes available to them at their preferred library. If a pass is unavailable at their preferred library, they can easily see what libraries the pass is available at, as well as when the pass will become available. Shifting the interface to provide clarity on when and where users can check out a physical pass greatly reduced the frustration and confusion caused by passes previously being discoverable in a search for resources that could be put on hold and picked up at leisure."
                }
              />
            </div>
          </div>
          <div className="ring-break-small"></div>
          {/* Conclusion */}
          <div className="ring-project-textblock">
            <VariableTextBlock
              title={"In conclusion"}
              description={
                <>
                  <p>
                    As an avid user of the PPLC app, there were frustrations
                    that I encountered that I assumed all users faced. While
                    this helped to get the initial snapshot of improvements that
                    could be brought to the app, conducting user surveys opened
                    my eyes to how important it is to collect a wide range of
                    experiences. It surprised me that users were unaware of
                    resources that were displayed right on the home screen,
                    revealing that the design, while intuitive for some, was
                    completely unusable to others.
                  </p>
                  <br></br>
                  <p>
                    Understanding user goals was another fascinating data point
                    I had a lot of fun exploring. A stakeholder can assume all
                    day how a user is going to interact with their app, but
                    through surveys and testing we can get a completely
                    different result than what was originally expected. A
                    thoughtful user survey and testing process is important for
                    all steps of user experience evolution and creation to
                    ensure that the end product is a delight for both users to
                    interact with and stakeholders to implement.
                  </p>
                </>
              }
              size={true}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Pplc;
