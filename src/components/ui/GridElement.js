import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

import "./Modal.css";

export default function ListProjects(props) {
  let { projectList } = props;
  return (
    <>
      {projectList.map(function (element) {
        return (
          <GridElement
            color={element.color}
            path_img={element.path}
            title_project={element.title}
            description={element.description}
            technologies={element.technologies}
            slide_img={element.slideImg}
            figma={element.figma}
          />
        );
      })}
    </>
  );
}

function GridElement(props) {
  const {
    color,
    path_img,
    slide_img,
    title_project,
    description,
    technologies,
    figma,
  } = props;
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    setSize("div-style");
    setContainer("modal-content");
    hideClose("close-modal");
    setTech("show-tech");
  };

  const [imageSize, setSize] = useState("div-style");
  const [modalContainer, setContainer] = useState("modal-content");
  const [techFlex, setTech] = useState("show-tech");
  const [closeModal, hideClose] = useState("close-modal");

  const handleClick = () => {
    if (imageSize === "div-style") {
      setSize("all-img");
      setContainer("modal-hidden");
      hideClose("close-hidden");
      setTech("hide-tech");
    } else {
      setSize("div-style");
      setContainer("modal-content");
      hideClose("close-modal");
      setTech("show-tech");
    }
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div
        onClick={toggleModal}
        style={{ backgroundColor: color }}
        className="project-border"
      >
        {path_img}
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div id="modal-container" className={modalContainer}>
            <h2>{title_project}</h2>
            {slideShow()}
            <div id="list-tech">
              {technologies.map((e) => (
                <div className={techFlex}>
                  <a style={{ color: "black" }} href={e.link}>
                    {" "}
                    {e.title}{" "}
                  </a>
                  <img
                    href={e.link}
                    src={e.url}
                    alt={`Technology use to build, in this case ${e.title}`}
                  ></img>
                </div>
              ))}
            </div>
            <div id="content-description">
              {description.map((e) => (
                <div>
                  <p>{e.first}</p>
                  <p>
                    {e.second}
                    <b>
                      {figma}
                      <a
                        style={{ color: "blue" }}
                        target="blank"
                        href={e.figma}
                      >
                        {" "}
                        Figma
                      </a>
                    </b>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );

  function slideShow() {
    return (
      <Slide autoplay={false} indicators={true}>
        {slide_img.map((slideImage) => (
          <img
            id="img-project"
            key={slideImage}
            className={imageSize}
            src={slideImage.url}
            alt={"imagen de proyectos"}
            onClick={handleClick}
          ></img>
        ))}
      </Slide>
    );
  }
}
