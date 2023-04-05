import React, { useState, useEffect } from "react";
import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Projects from "../sections/projects/Projects";
import NavBar from "../utils/NavBar";
import "./Body.css";

let description = "";
let about_me = "";
let projects_title = "";
let skill_title = "";
let skill_list = [];

export default function Body() {
  useEffect(() => {
    NavBar();
  }, []);
  const [language, setLanguage] = useState(true);
  setContent(language);
  return (
    <>
      <Home description={description} />
      <nav id="language">
        <label class="switch">
          <input
            onChange={() => setLanguage(!language)}
            type="checkbox"
          ></input>
          <span class="slider"></span>
        </label>
      </nav>

      <div id="spacer"></div>
      <About
        about_content={about_me}
        skill={skill_list}
        skill_title={skill_title}
      />
      <div id="spacer-mid">
        <div id="spacer-mid-details"></div>
      </div>
      <Projects title={projects_title} />
    </>
  );
}
function setContent(en) {
  if (en) {
    description =
      "I'm an a mobile app developer with experience making apps using Java and Flutter, I'm always looking to expand my skills";
    about_me = "ingles";
    projects_title = "Projects";
    skill_title = "Skill-Set";
  } else {
    description =
      "Soy un desarrollador de aplicaciones móviles con experiencia en Java y Flutter, siempre estoy buscando expandir mis habilidades.";
    about_me = "espanol";
    skill_title = "Habilidades";
    projects_title = "Proyectos";
  }
}
