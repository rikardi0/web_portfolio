import React from "react";
import Slide from "react-reveal/Slide";
import "./Svg.css";

const ImageHero = (props) => {
  const { size, type, deg, left, right, top, duration } = props;

  let height = size;
  let heightScreen = size - 10;
  let width = size / 2;
  let widthScreen = width - 10;
  let detailName = ["details-left", "details-center", "details-right"];
  return (
    <Slide duration={duration} left={left} top={top} right={right}>
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
    </Slide>
  );
};
export default ImageHero;
