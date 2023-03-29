import React, { useState, useEffect } from "react";
import "./Body.css";
import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Projects from "../sections/projects/Projects";

import navBar from "../navBar.js";

let description = "";
let about_me = "";
let skill_list = [];

export default function Body() {
  useEffect(() => {
    navBar();
  }, []);
  const [language, setLanguage] = useState(true);
  setContent(language);
  return (
    <>
      <Home description={description} />
      <nav id="nav-language">
        <label class="switch">
          <input
            onChange={() => setLanguage(!language)}
            type="checkbox"
          ></input>
          <span class="slider"></span>
        </label>
      </nav>

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
