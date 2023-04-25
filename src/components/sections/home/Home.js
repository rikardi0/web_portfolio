import React from "react";
import Decoration from "../res/images/svg/Starts";
import ImageHero from "../res/images/svg/ImageHero";
import DividerLetter from "../../ui/DividerLetter";

import "./Home.css";

const Home = (props) => {
  const { description } = props;
  return (
    <section className="section" data-label="Home" id="home">
      <header id="head">
        <DividerLetter word={"Ricardo"} />
        <DividerLetter word={"Hurtado"} />
      </header>
      <section id="decoration-description">
        <Decoration size={40} />
        <span className="description">{description}</span>
      </section>
      <div id="hero">
        <ImageHero size={290} type={"0"} deg={0} />
        <ImageHero size={270} type={"2"} deg={0} />
        <ImageHero size={310} type={"1"} deg={0} />
        <ImageHero size={300} type={""} deg={-5} />
      </div>
    </section>
  );
};

export default Home;
