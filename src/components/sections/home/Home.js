import React from "react";
import Decoration from "../res/images/svg/Starts";
import ImageHero from "../res/images/svg/ImageHero";
import DividerLetter from "../../utils/DividerLetter";

import "./Home.css";

const Home = (props) => {
  const { description } = props;
  return (
    <section className="section" data-label="Home" id="home">
      <header id="head">
        <DividerLetter style={"letters-container"} word={"Ricardo"} />
        <DividerLetter style={"letters-container"} word={"Hurtado"} />
      </header>
      <section id="decoration-description">
        <Decoration size={40} />
        <span className="description">{description}</span>
      </section>
      <div id="hero"></div>
    </section>
  );
};

export default Home;
