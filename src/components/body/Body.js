import React, { useState } from "react";
import "./Body.css";
import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Projects from "../sections/projects/Projects";

let description = "";
let about_me = "";
let skill_list = [];

const navLinks = ["home", "about", "projects"];

const renderNavLink = (content) => {
  const scrollToId = `${content.toLowerCase()}`;

  const handleClickNav = () => {
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="nav-link" data-for-section={content} key={content}>
      <div className="dots dots-selected" onClick={handleClickNav}></div>
      <div className="nav-label">{content}</div>
    </div>
  );
};

export default function Body() {
  const [language, setLanguage] = useState(true);
  setContent(language);
  return (
    <>
      <nav id="nav-language">
        <label class="switch">
          <input
            onChange={() => setLanguage(!language)}
            type="checkbox"
          ></input>
          <span class="slider"></span>
        </label>
        {navLinks.map((nav) => renderNavLink(nav))}
      </nav>
      <Home description={description} />
      <div id="spacer"></div>
      <About about_content={about_me} skill={skill_list} />
      <div id="spacer-mid">
        <div id="spacer-mid-details"></div>
      </div>

      <Projects />
    </>
  );
}
function setContent(en) {
  if (en) {
    description =
      "I'm an a mobile app developer with experience making apps using Java and Flutter, I'm always looking to expand my skills";
    about_me = "ingles";
  } else {
    description =
      "Soy un desarrollador de aplicaciones móviles con experiencia en Java y Flutter, siempre estoy buscando expandir mis habilidades.";
    about_me = "espanol";
  }
}
