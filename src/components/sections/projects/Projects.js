import React from "react";
import "../projects/Projects.css";
import ListProjects from "../../utils/GridElement";
import DividerLetter from "../../utils/DividerLetter";

export default function Projects(props) {
  let { title } = props;
  return (
    <section className="section" data-label="Projects" id="projects">
      <div id="project-title">
        <DividerLetter word={title} />
      </div>
      <section id="projects-container">
        <ListProjects />
      </section>
    </section>
  );
}
