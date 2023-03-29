import React from "react";
import "./Home.css";
import Decoration from "../res/svg/Starts";
import ImageHero from "../res/ImageHero";

const Home = (props) => {
  const { description } = props;
  return (
    <section className="section" data-label="Home" id="home">
      <header id="head">
        <h1 className="title">Ricardo Hurtado</h1>
      </header>
      <section id="decoration-description">
        <Decoration size={40} />
        <span className="description">{description}</span>
      </section>
      <div id="hero">
        <ImageHero />
      </div>
    </section>
  );
};

export default Home;
