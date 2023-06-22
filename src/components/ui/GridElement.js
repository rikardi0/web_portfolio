import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

import CloseTab from "../sections/res/svg/CloseTab";
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
  } = props;
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    setSize("div-style");
    setContainer("modal-content");
    hideClose("close-modal");
  };

  const [imageSize, setSize] = useState("div-style");
  const [modalContainer, setContainer] = useState("modal-content");
  const [closeModal, hideClose] = useState("close-modal");

  const handleClick = () => {
    if (imageSize === "div-style") {
      setSize("all-img");
      setContainer("modal-hidden");
      hideClose("close-hidden");
    } else {
      setSize("div-style");
      setContainer("modal-content");
      hideClose("close-modal");
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
            <p>{description}</p>
            <div>
              {technologies.map((e) => (
                <ul>
                  <li key={e}>
                    <span>{e}</span>
                  </li>
                </ul>
              ))}
            </div>
            <button className={closeModal} onClick={toggleModal}>
              <CloseTab />
            </button>
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
