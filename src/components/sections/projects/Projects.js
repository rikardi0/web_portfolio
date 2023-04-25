import React from "react";
import "../projects/Projects.css";
import ListProjects from "../../ui/GridElement";
import DividerLetter from "../../ui/DividerLetter";

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
