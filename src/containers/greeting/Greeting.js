import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import Button from "../../components/button/Button";
import "../Main.scss";

import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className=" greeting-main">
          <div className="greeting-image-div">
            <div></div>
          </div>
          <div className="greeting-text-div">
            <div className="greeting-text-holder">
              <div>
                <h5 className={"dark-mode greeting-text"}>{greeting.start}</h5>
                <p
                  className={
                    "dark-mode greeting-text greeting-text-title  text-transform"
                  }
                >
                  {greeting.title}
                </p>
                <p
                  className={
                    isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p subTitle"
                  }
                >
                  {greeting.subTitle}
                </p>
              </div>
              <div className="button-greeting-div">
                <Button text="More About Me" href="#experience" />
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
