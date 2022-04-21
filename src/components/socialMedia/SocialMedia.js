import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      <a href={socialMediaLinks.github} className="icon-button github" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.linkedin} className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-button google" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope"></i>
        <span></span>
      </a>
      <a href={socialMediaLinks.spotify} className="icon-button gitlab" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-spotify"></i>
        <span></span>
      </a>

    </div>
  );
}
