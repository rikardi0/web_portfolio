import React, { useState, useEffect } from "react";
import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";

import list from "../sections/res/strings/list";
import strings from "../sections/res/strings/strings";
import NavBar from "../ui/NavBar";
import "./Body.css";

export default function Body() {
  useEffect(() => {
    NavBar();
  }, []);
  const [language, setLanguage] = useState(true);

  let contentBody = language ? strings.body.english : strings.body.spanish;
  let projectList = language
    ? list.english.projectList
    : list.spanish.projectList;

  return (
    <>
      <Home description={contentBody.description} />
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
        aboutContent={contentBody.about}
        aboutTitle={contentBody.aboutTitle}
        skill={contentBody.skill}
        skillTitle={contentBody.skillTitle}
      />
      <div id="spacer-mid">
        <div id="spacer-mid-details"></div>
      </div>
      <Projects title={contentBody.projectsTitle} projectList={projectList} />
      <Contact titleContact={contentBody.contact} />
    </>
  );
}
