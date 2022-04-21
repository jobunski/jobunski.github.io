import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="dark-mode footer-text">
          <span>&copy;</span>
            {new Date().getFullYear()}
        </p>
      </div>
    </Fade>
  );
}
