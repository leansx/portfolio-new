import TextBlock from "./TextBlock";

function UxConfig({
  image,
  title,
  paragraphOne,
  paragraphTwo,
  mobile,
  right,
}) {
  return (
    <div className={mobile ? "uxconfigmobile" : "uxconfigdesktop"}>
        <div className={right ? "uxtextblockright" : "uxtextblock"}>
            <TextBlock title={title} description={paragraphOne} descriptionTwo={paragraphTwo}/>
            </div>
      

      <div className="ring-highlight-text-container">
        <span className="site-subtext">{title}</span>
        <div className="ring-highlight-para-container">
          <p className="ring-highlight-paragraph">{paragraphOne}</p>
          <p className="ring-highlight-paragraph">{paragraphTwo}</p>
        </div>
      </div>
    </div>
  );
}

export default UxConfig;


 <div className={mobile ? "uxconfigmobile" : "uxconfigdesktop"}>
              <TextBlock
                title={"The interface"}
                description={
                  "Giving Museum passes their own dedicated space not only increased their visibility and access, it significantly reduced the friction between users finding a pass, and checking one out. Users can see all passes at a glance, search the list, and filter by passes available to them at their preferred library. If a pass is unavailable at their preferred library, they can easily see what libraries the pass is available at, as well as when the pass will become available. Shifting the interface to provide clarity on when and where users can check out a physical pass greatly reduced the frustration and confusion caused by passes previously being discoverable in a search for resources that could be put on hold and picked up at leisure."
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
              <TextBlock
                title={"The interface"}
                description={
                  "Giving Museum passes their own dedicated space not only increased their visibility and access, it significantly reduced the friction between users finding a pass, and checking one out. Users can see all passes at a glance, search the list, and filter by passes available to them at their preferred library. If a pass is unavailable at their preferred library, they can easily see what libraries the pass is available at, as well as when the pass will become available. Shifting the interface to provide clarity on when and where users can check out a physical pass greatly reduced the frustration and confusion caused by passes previously being discoverable in a search for resources that could be put on hold and picked up at leisure."
                }
              />
            </div>
