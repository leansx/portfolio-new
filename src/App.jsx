// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./styles/App.css";
import "./styles/Homepage.css";
import Tag from "./components/Tag";
import ProjectDetails from "./components/ProjectDetails";
import Nav from "./components/Nav";
import TextBlock from "./components/TextBlock";
import { Link } from "react-router";

function App() {
  return (
    <div className="homepage-body standard-grid">
      <div className="star-container">
        <div className="star-background">
          <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/stars.webp" />
        </div>
        <div className="star-background star-2">
          <img src="https://rwraptdq2uavnhsn.public.blob.vercel-storage.com/stars.webp" />
        </div>
      </div>

      <div className="homepage-titles-container">
        <div className="homepage-titles">
          <span className="effect">Graphic Design</span>
          <span className="effect">UI/UX</span>
          <span className="effect">Web Design</span>
        </div>
      </div>
      <div className="homepage-bottom">
        <div className="endurance-center">
          <div className="endurance-container">
            <img src="/placeholder_endurance.svg" />
          </div>
        </div>
        <div className="homepage-content">
          <div className="homepage-content-first">
            <h2>Hi, I'm Hannah.</h2>
            <h3>Senior Graphic Designer</h3>
          </div>
          <p className="homepage-content-second">
            I’m obsessed with the way people interact with brands on the web.
            Here, you’ll find a curated selection of my favorite projects.
          </p>
          <div className="homepage-content-button">
            <Link to={"/projects"}>
              <button>View my work</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
