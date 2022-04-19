import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();
  let faIcon =  <i className="fa fa-briefcase"></i>

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  if (cardInfo.education){
      faIcon = <i className="fa fa-graduation-cap"></i>
  }

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
        <div className="row-experience">
            <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                    <ul>
                        <li>
                            <div className="icon">
                                {faIcon}
                            </div>
                            <span className="time  text-uppercase">{cardInfo.date}</span>
                            <h5 className="poppins-font text-uppercase">{cardInfo.role}</h5>
                            <h5 className="place open-sans-font">{cardInfo.company}</h5>
                            <p className="open-sans-font">{cardInfo.desc}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="experience-text-details">
        </div>
    </div>

  );
}
