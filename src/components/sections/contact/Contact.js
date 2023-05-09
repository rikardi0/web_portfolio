import React from "react";
import ContactSvg from "../../ui/ContactSvg";
import Jump from "react-reveal/Jump";

import "./Contact.css";
function Contact(props) {
  const { titleContact } = props;
  return (
    <section id="contact">
      <Jump>
        <div className="title-contact"> {titleContact}</div>
      </Jump>
      {window.innerWidth < 900 ? (
        <ContactSvg size={55} />
      ) : (
        <ContactSvg size={70} />
      )}
    </section>
  );
}

export default Contact;
