import { Link } from "react-router";
import "../styles/Nav.css";
import { Hamburger, Linkedin, X } from "lucide-react";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="nav-container">
      <div className="main-nav">
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <img src="/darkhrlogo.png" />
          </Link>
        </div>
        <div className="links-container">
          <ul className="links">
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/hannahreinsel/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div onClick={toggleMenu} className="mobile-hamburger">
          <Hamburger />
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "menu-open" : "menu-close"}`}>
        <div className="mobile-links-container">
          <div onClick={toggleMenu} className="mobile-closeout">
            <X />
          </div>

          <ul className="mobile-links">
            <li className="logo">
              <Link onClick={toggleMenu} to={"/"}>
                {" "}
                <img src="/lightlogo.png" />
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/hannahreinsel/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
