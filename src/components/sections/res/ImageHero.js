import React from "react";

import "./ImageHero.css";

const ImageHero = () => {
  return (
    <section id="img-hero">
      <div className="background" id="background-left"></div>
      <div id="img-container">
        <div id="rectangle">
          <section id="left-section">
            <div className="phone-border" id="phone-left">
              <div className="screen" id="screen-left">
                <div id="details-left"></div>
              </div>
            </div>
            <div className="phone-border" id="phone-front-left">
              <div className="screen" id="screen-front-left"></div>
            </div>
          </section>
          <div className="phone-border" id="phone-center">
            <div className="screen" id="screen-center">
              <div id="details-center"></div>
            </div>
          </div>
          <div className="phone-border" id="phone-right">
            <div className="screen" id="screen-right">
              <div id="details-right"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="background" id="background-right"></div>
    </section>
  );
};
export default ImageHero;
