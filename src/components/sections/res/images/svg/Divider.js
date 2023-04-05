import React from "react";
import "./Svg.css";
export default function Divider(props) {
  const { color } = props;
  const { size } = props;
  return (
    <div class="custom-shape-divider-top-1679633889">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={size}
        preserveAspectRatio="none"
      >
        <path
          d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
          class="shape-fill"
          stroke={color}
          fill={color}
        ></path>
      </svg>
    </div>
  );
}
