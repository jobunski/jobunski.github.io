import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

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

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      {/*<div style={{background: rgb(colorArrays)}} className="experience-banner">*/}
      {/*  <div className="experience-blurred_div"></div>*/}
      {/*  <div className="experience-div-company">*/}

      {/*  </div>*/}
      {/*  <h5 className="experience-text-company">{cardInfo.company}</h5>*/}

      {/*</div>*/}
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
        <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">Engineering
                Experience <span>&amp;</span> Education</h3>
        </div>
        <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="fa fa-briefcase"></i>
                        </div>
                        <span className="time open-sans-font text-uppercase">March 2022 - Present</span>
                        <h5 className="poppins-font text-uppercase">Senior Software Engineer<span
                            className="place open-sans-font">Netlify</span></h5>
                        <p className="open-sans-font">Working on developer tooling at Netlify.</p>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa fa-briefcase"></i>
                        </div>
                        <span className="time open-sans-font text-uppercase">Sep 2019 - March 2022</span>
                        <h5 className="poppins-font text-uppercase">Software Engineer<span
                            className="place open-sans-font">Microsoft</span></h5>
                        <p className="open-sans-font">Built <a className="open-sans-font"
                                                               href="https://www.microsoft.com/en-us/windows-server/windows-admin-center"
                                                               target="_blank">Windows Admin Center</a> with the Server
                            Management Experience Team.</p>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa fa-briefcase"></i>
                        </div>
                        <span className="time open-sans-font text-uppercase">Nov 2017 - June 2019</span>
                        <h5 className="poppins-font text-uppercase">Remote Full Stack Engineer<span
                            className="place open-sans-font">BuffaloGrid (via Andela)</span></h5>
                        <p className="open-sans-font">Built software for the BuffaloGrid hub and the cloud
                            platform. </p>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa fa-briefcase"></i>
                        </div>
                        <span className="time open-sans-font text-uppercase">Aug 2017 - Oct 2017</span>
                        <h5 className="poppins-font text-uppercase">Remote Frontend Engineer<span
                            className="place open-sans-font">Famoco (via Andela)</span></h5>
                        <p className="open-sans-font">Built and maintained the Famoco Mobile Device Management(MDM)
                            platform</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
                <ul>
                    <li>
                        <div className="icon">
                            <i className="fa fa-briefcase"></i>
                        </div>
                        <span className="time open-sans-font text-uppercase">Dec 2016 - Sep 2019</span>
                        <h5 className="poppins-font text-uppercase">Software Engineer<span
                            className="place open-sans-font">Andela</span></h5>
                        <p className="open-sans-font">Worked on internal products and was later placed as a remote
                            engineer for Andela clients: Famoco and BuffaloGrid.</p>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa fa-briefcase"></i>
                        </div>
                        <span
                            className="time open-sans-font text-uppercase">Other Working Experience: 2013 - 2016</span>
                        <h5 className="poppins-font text-uppercase">Multiple Capacities<span
                            className="place open-sans-font">Waridi Events Ltd, Family Bank Ltd and Ripplez ENT/Mambo Mziki</span>
                        </h5>
                        <p className="open-sans-font">I worked in a few other industries before getting into
                            engineering.</p>
                    </li>
                    <li>
                        <div className="icon">
                            <i className="fa fa-graduation-cap"></i>
                        </div>
                        <span className="time open-sans-font text-uppercase">2009-2012</span>
                        <h5 className="poppins-font text-uppercase">Bachelor of Commerce Degree (Finance) <span
                            className="place open-sans-font">Jomo Kenyatta University of Agriculture and Technology</span>
                        </h5>
                        <p className="open-sans-font">Undergraduate degree in commerce and finance.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

  );
}
