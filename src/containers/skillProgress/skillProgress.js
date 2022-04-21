import React from "react";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import "./Progress.scss";
import "../Main.scss"
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div>
            <h3 className="skills-heading">Proficiency</h3>
            <div className="skill-cards-div">
              {techStack.experience.map((exp, i) => {
                return (
                    <div key={i} className="skill-circular-progress">
                      <div>
                        <CircularProgressbar  value={exp.progressPercentage} text={`${exp.progressPercentage}%`} styles={buildStyles(
                            {
                              pathColor: '#feb653',
                              textColor: '#ffffff'
                            }
                        )} />
                        <h5 className="text-transform text-center ">{exp.Stack}</h5>
                      </div>
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
