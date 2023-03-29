import React from "react";
import "../projects/Projects.css";
import ListProjects from "../res/GridElement";

export default function Projects() {
  return (
    <section className="section" data-label="Projects" id="projects">
      <h2 id="projects-title">Projects</h2>
      <section id="projects-container">
        <ListProjects />
      </section>
    </section>
  );
}
