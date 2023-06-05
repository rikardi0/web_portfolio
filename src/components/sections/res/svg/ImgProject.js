import React from "react";

function ImgProject(props) {
  let { img } = props;
  return (
    <img className="svg-projects" src={img} alt={"imagen de proyectos"}></img>
  );
}

export default ImgProject;
