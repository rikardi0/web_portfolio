import React from "react";
import Divider from "../res/images/svg/Divider";
import CloseTab from "../res/images/svg/CloseTab.js";
import MinimizeTab from "../res/images/svg/Minimize.js";
import "./About.css";

export default function AboutMe(props) {
  let { about_content, skill_title } = props;
  const skill_list = props.skill;
  const list_items = skill_list.map((myList) => {
    return <li>{myList}</li>;
  });
  return (
    <section className="section" data-label="About" id="about">
      <Divider color="#000000" size="0 0 1200 120" />
      <Divider color="#0794db" size="0 2 1200 120" />
      <div id="sign-road">
        <div id="skill-border">
          <section id="skill-set">
            <h2>{skill_title}</h2>
            <ul className="skill-list"> {list_items} </ul>,
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

          <span className="tab-text">About-Me</span>
        </div>
        <p>{about_content}</p>
      </section>
    </section>
  );
}
