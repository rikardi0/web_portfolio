import React, { useState, useEffect } from "react";
import Decoration from "../res/svg/Starts";
import ImageHero from "../res/svg/ImageHero";
import DividerLetter from "../../ui/DividerLetter";
import "./Home.css";
const Home = (props) => {
  const { description } = props;
  // eslint-disable-next-line no-unused-vars
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      {window.innerWidth < 700 ? (
        <div id="hero">
          <ImageHero size={160} type={"1"} deg={2} />
          <ImageHero size={175} type={"2"} deg={0} />
          <ImageHero size={155} type={"3"} deg={-1} />
        </div>
      ) : (
        <div id="hero">
          <ImageHero size={310} type={"0"} deg={0} />
          <ImageHero size={290} type={"2"} deg={0} />
          <ImageHero size={350} type={"1"} deg={0} />
          <ImageHero size={325} type={""} deg={-5} />
        </div>
      )}
    </section>
  );
};

export default Home;
