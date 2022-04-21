import React, {useContext} from "react";
import "./Contact.scss";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-before-main">
          <div className="contact-div-main">
            <div className="contact-div-body">
              <h1 className="heading contact-title">{contactInfo.title}</h1>
              <div className="contact-div-subtitle">
                <p className= "dark-mode contact-subtitle">
                  {contactInfo.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </Fade>
  );
}
