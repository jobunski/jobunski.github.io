import React from "react";
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  const percentage = 66;
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div>
            <h3 className="skills-heading">Proficiency</h3>
            <div className="skill-cards-div">
              {techStack.experience.map((exp, i) => {
                const progressStyle = {
                  width: exp.progressPercentage
                };
                return (
                    <div key={i} className="skill-circular-progress">
                      <CircularProgressbar  value={exp.progressPercentage} text={`${exp.progressPercentage}%`} />;
                      <p>{exp.Stack}</p>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
