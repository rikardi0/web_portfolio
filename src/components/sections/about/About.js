import React, { useState } from "react";
import Divider from "../res/svg/Divider";
import CvImage from "../res/svg/Cv";
import "./About.css";

export default function AboutMe(props) {
  let { aboutContent, aboutTitle, skillTitle, skill, download, callToAction } =
    props;

  const [tabStyle, setStyle] = useState(0);

  const changeStyle = () => {
    if (tabStyle > 1) {
      setStyle(0);
    } else {
      setStyle(tabStyle + 1);
    }
  };
  const about = aboutContent.map((e) => {
    const elementId = e.trim().substring(0, 3).toLowerCase();

    return (
      <p
        id="about-description"
        key={elementId}
        className={
          tabStyle === 0 ? "text-xp" : tabStyle === 1 ? "text-98" : "text-ten"
        }
      >
        {e}
      </p>
    );
  });
  const listItems = skill.map((myList) => {
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
              href={
                "https://drive.google.com/uc?export=download&id=1lyPVOMjqT2pYDHGjIjDjTWVpNY7hFHzU"
              }
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
      <section
        id="about-me"
        className={
          tabStyle === 0
            ? "about-me-xp"
            : tabStyle === 1
            ? "about-me-98"
            : "about-me-ten"
        }
      >
        <div
          id="tab-window"
          className={
            tabStyle === 0
              ? "tab-window-xp"
              : tabStyle === 1
              ? "tab-window-98"
              : "tab-window-ten"
          }
        >
          <span
            id="tab-text"
            className={
              tabStyle === 0
                ? "tab-text-xp"
                : tabStyle === 1
                ? "tab-text-98"
                : "tab-text-ten"
            }
          >
            {aboutTitle}
          </span>
        </div>
        {about}
        <div
          onClick={changeStyle}
          id="col"
          className={
            tabStyle === 0 ? "col-xp" : tabStyle === 1 ? "col-98" : "col-ten"
          }
        >
          {callToAction}
        </div>
      </section>
    </section>
  );
}
