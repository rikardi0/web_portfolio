import React from "react";
import "./DividerLetter.css";

function DividerLetter(props) {
  let { word } = props;
  let letras = word.split("").filter((letra) => letra !== " ");
  return (
    <div className="letters-container">
      {letras.map((letra, index) => (
        <span key={index} className="letter">
          {letra}
        </span>
      ))}
    </div>
  );
}

export default DividerLetter;
