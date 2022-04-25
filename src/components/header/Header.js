import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;

  const [small, setSmall] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {});
  }

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className="dark-menu menu">
          {viewSkills && (
            <li>
              <a href="#home">Home</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">About Me</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#contact">Contact</a>
            </li>
          )}
          <li></li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
