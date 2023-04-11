import React from "react";
import Divider from "../res/images/svg/Divider";
import CloseTab from "../res/images/svg/CloseTab.js";
import MinimizeTab from "../res/images/svg/Minimize.js";
import "./About.css";

export default function AboutMe(props) {
  let { aboutContent, aboutTitle, skillTitle } = props;
  const skillList = props.skill;
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
            <ul className="skill-list"> {listItems} </ul>,
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
