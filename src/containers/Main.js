import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import SocialMedia from "../components/socialMedia/SocialMedia";
import Footer from "../components/footer/Footer";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";
import Contact from "./contact/Contact";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(isDark);
  };

  return (
    <div className="dark-mode div-body">
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <Header />
        <Greeting />
        <WorkExperience />
        <StackProgress />
        <Contact />
        <div className="social-group">
          <div className="social-group-list">
            <SocialMedia />
          </div>
        </div>
      </StyleProvider>
    </div>
  );
};

export default Main;
