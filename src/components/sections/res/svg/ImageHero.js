import React from "react";
import "./Svg.css";

const ImageHero = (props) => {
  const { size, type, deg } = props;

  let height = size;
  let heightScreen = size - 5.5;
  let width = size / 2;
  let widthScreen = width - 12;
  let detailName = ["details-left", "details-center", "details-right"];
  return (
    <div
      id="border"
      className="phone-border"
      style={{
        height: height,
        minHeight: height,
        width: width,

        transform: `rotate(${deg}deg)`,
      }}
    >
      <div
        id="screen"
        className="screen"
        style={{
          height: heightScreen,
          maxHeight: heightScreen,
          width: widthScreen,
        }}
      >
        <div id={detailName[type]}></div>
      </div>
    </div>
  );
};
export default ImageHero;
