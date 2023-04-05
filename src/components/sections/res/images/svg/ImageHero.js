import React from "react";

import "./Svg.css";

const ImageHero = (props) => {
  const { size, type, deg } = props;

  let height = `${size}vh`;
  let heightScreen = size - 1.25;
  let width = size / 4.35;
  let widthScreen = width - 1;
  let detailName = ["details-left", "details-center", "details-right"];
  return (
    <div
      id="border"
      className="phone-border"
      style={{
        height: height,
        width: `${width}vw`,
        transform: `rotate(${deg}deg)`,
      }}
    >
      <div
        id="screen"
        className="screen"
        style={{ height: `${heightScreen}vh`, width: `${widthScreen}vw` }}
      >
        <div id={detailName[type]}></div>
      </div>
    </div>
  );
};
export default ImageHero;
