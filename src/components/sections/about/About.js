import React from "react";
import Divider from "../res/svg/Divider";
import CloseTab from "../res/svg/CloseTab.js";
import MinimizeTab from "../res/svg/Minimize.js";
import CvImage from "../res/svg/Cv";
import "./About.css";

export default function AboutMe(props) {
  let { aboutContent, aboutTitle, skillTitle, skill, download } = props;
  const skillList = skill;
  const listItems = skillList.map((myList) => {
    return <li>{myList}</li>;
  });
  return (
    <section className="section" data-label="About" id="about">
      <Divider color="#000000" size="0 0 1200 120" />
      <Divider color="#0794db" size="0 2 1200 120" />
      <div id="sign-road">
        <div id="skill-border">
          <section id="skill-set">
            <h2>{skillTitle}</h2>
            <ul className="skill-list"> {listItems} </ul>
            <a
              class="btn"
              id="download-cv"
              href={require("../res/file/CV.pdf")}
              download="Ricardo Hurtado CV"
            >
              <span>{download}</span>
              <CvImage />
            </a>
          </section>
        </div>
        <section id="wood-container">
          <div className="wood-base"></div>
          <div className="wood-base"></div>
        </section>
      </div>
      <section id="about-me">
        <div id="tab-window">
          <div>
            <CloseTab />
            <MinimizeTab />
          </div>

          <span className="tab-text">{aboutTitle}</span>
        </div>
        <p>{aboutContent}</p>
      </section>
    </section>
  );
}
