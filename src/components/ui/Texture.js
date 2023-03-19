import React from "react";
import "./Texture.css";
export default function Texture() {
  return (
    <div id="rectangle">
      <section id="left_section">
        <div className="phone_border" id="phone_left">
          <div className="screen" id="screen_left">
            <div id="details_left"></div>
          </div>
        </div>
        <div className="phone_border" id="phone_front_left">
          <div className="screen" id="screen_front_left"></div>
        </div>
      </section>

      <div className="phone_border" id="phone_center">
        <div className="screen" id="screen_center">
          <div id="details_center"></div>
        </div>
      </div>

      <div className="phone_border" id="phone_right">
        <div className="screen" id="screen_right">
          <div id="details_right"></div>
        </div>
      </div>
    </div>
  );
}
