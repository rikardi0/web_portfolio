import React from "react";
import Images from "../res/images/index";

let projectList = [
  { path: Images.close_tab, color: "red" },
  { path: Images.close_tab, color: "red" },
  { path: Images.close_tab, color: "red" },
];

export default function ListProjects(props) {
  return (
    <>
      {projectList.map((element) => (
        <GridElement color={element.color} path_img={element.path} />
      ))}
    </>
  );
}

function GridElement(props) {
  const { color, path_img } = props;

  return (
    <div style={{ backgroundColor: color }} className="project-border">
      <section
        style={{
          backgroundImage: `url(${path_img})`,
        }}
        className="project-container"
      ></section>
    </div>
  );
}
