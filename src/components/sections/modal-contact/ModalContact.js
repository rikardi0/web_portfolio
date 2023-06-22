import React from "react";
import ContactSvg from "../../ui/ContactSvg";
import Images from "../res/images/index";
import "../modal-contact/ModalContact.css";

function ModalContact(props) {
  let { contactTitle, contentText } = props;
  return (
    <div id="modal-container-contact">
      <div id="title-logo">
        <img
          id="img-tarjeta"
          src={Images.tarjeta}
          alt="logo img de la tarjeta"
        ></img>
        <div id="text-tarjeta">
          <div id="modal-title">{contactTitle}</div>
          <div id="modal-content-contact">{contentText}</div>
        </div>
      </div>
      <div id="contact-svg-container">
        <ContactSvg />
      </div>
    </div>
  );
}

export default ModalContact;
