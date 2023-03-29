import React from "react";
import Divider from "../res/svg/Divider";
import Images from "../res/images/index";
import "./About.css";

export default function AboutMe(props) {
  let { about_content } = props;
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
            <h2>Skill-Set</h2>
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
            <img
              className="tab-img"
              src={Images.close_tab}
              alt="close tab windows"
            />
            <img
              className="tab-img"
              src={Images.minimize}
              alt="minimize tab windows"
            />
          </div>

          <span className="tab-text">About-Me</span>
        </div>
        <p>{about_content}</p>
      </section>
    </section>
  );
}
