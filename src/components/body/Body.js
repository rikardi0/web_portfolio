import React, { useState, useEffect } from "react";
import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";
import NavBar from "../ui/NavBar";
import "./Body.css";

let description = "";
let aboutMe = "";
let aboutTitle = "";
let projectsTitle = "";
let skillTitle = "";
let contactTitle = "";
let skillList = [];

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
        aboutContent={aboutMe}
        aboutTitle={aboutTitle}
        skill={skillList}
        skillTitle={skillTitle}
      />
      <div id="spacer-mid">
        <div id="spacer-mid-details"></div>
      </div>
      <Projects title={projectsTitle} />
      <Contact titleContact={contactTitle} />
    </>
  );
}

function setContent(en) {
  if (en) {
    description =
      "I'm an a mobile app developer with experience making apps using Java and Flutter, I'm always looking to expand my skills";
    aboutMe =
      "I'm an 23-year-old mechanical engineer with a passion for app and web development. I specialize in flutter and java, and my proficiency in design sets me apart from the competition. Let's work together to bring your vision to life!";
    projectsTitle = "Projects";
    skillTitle = "Skill-Set";
    aboutTitle = "About-Me";
    contactTitle = "Let's team up!";
  } else {
    description =
      "Soy un desarrollador de aplicaciones móviles con experiencia en Java y Flutter, siempre estoy buscando expandir mis habilidades.";
    aboutMe =
      "Soy un ingeniero mecánico de 23 años apasionado por el desarrollo web y de aplicaciones. Me especializo en flutter y java, y mi competencia en diseño me diferencia. ¡Trabajemos juntos para hacer realidad su visión!";
    aboutTitle = "Sobre-Mi";
    skillTitle = "Habilidades";
    projectsTitle = "Proyectos";
    contactTitle = "Hagamos Equipo!";
  }
}
