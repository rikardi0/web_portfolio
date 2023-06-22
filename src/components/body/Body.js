import React, { useState, useEffect } from "react";

import images from "../sections/res/images/index";

import Home from "../sections/home/Home";
import About from "../sections/about/About";
import Projects from "../sections/projects/Projects";
import Footer from "../sections/footer/Footer";
import ModalContact from "../sections/modal-contact/ModalContact";
import list from "../sections/res/strings/list";
import strings from "../sections/res/strings/strings";
import NavBar from "../ui/NavBar";
import "./Body.css";
import "../sections/modal-contact/ModalContact.css";

export default function Body() {
  useEffect(() => {
    NavBar();
  }, []);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal-contact");
  } else {
    document.body.classList.remove("active-modal-contact");
  }
  const [language, setLanguage] = useState(true);
  let contentBody = language ? strings.body.english : strings.body.spanish;
  let projectList = language
    ? list.english.projectList
    : list.spanish.projectList;

  return (
    <>
      <img
        id="contact-btn"
        onClick={toggleModal}
        src={images.telephone}
        alt="contact btn"
      ></img>
      <Home description={contentBody.description} />
      <nav id="language">
        <input
          onChange={() => setLanguage(!language)}
          type="checkbox"
          class="plus-minus"
        ></input>
      </nav>
      <div id="spacer"></div>
      <About
        aboutContent={contentBody.about}
        aboutTitle={contentBody.aboutTitle}
        download={contentBody.download}
        skill={contentBody.skill}
        skillTitle={contentBody.skillTitle}
        callToAction={contentBody.call}
      />
      <div id="spacer-mid">
        <div id="spacer-mid-details"></div>
      </div>
      <Projects title={contentBody.projectsTitle} projectList={projectList} />
      <Footer titleContact={contentBody.contact} />
      {modal && (
        <div className="modal-contact">
          <div onClick={toggleModal} className="overlay-contact"></div>
          <div id="modal-container-contact">
            <ModalContact
              contactTitle={contentBody.contact}
              contentText={contentBody.contactDescription}
            />
          </div>
        </div>
      )}
    </>
  );
}
