import React, { useState, useEffect } from "react";
import Decoration from "../res/svg/Starts";
import ImageHero from "../res/svg/ImageHero";
import DividerLetter from "../../ui/DividerLetter";
import "./Home.css";
const Home = (props) => {
  const { description } = props;
  const [, setScreenWidth] = useState(window.innerWidth);

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
      {window.innerWidth < 425 ? (
        <div id="hero">
          <ImageHero size={145} type={""} deg={0} />
          <ImageHero size={160} type={""} deg={-5} />
        </div>
      ) : window.innerWidth < 500 ? (
        <div id="hero">
          <ImageHero size={155} type={"1"} deg={2} />
          <ImageHero size={160} type={""} deg={0} />
          <ImageHero size={162} type={"2"} deg={0} />
        </div>
      ) : window.innerWidth < 780 ? (
        <div id="hero">
          <ImageHero size={157} type={""} deg={0} />
          <ImageHero size={170} type={"1"} deg={0} />
          <ImageHero size={165} type={"2"} deg={-5} />
          <ImageHero size={145} type={""} deg={0} />
        </div>
      ) : window.innerWidth < 1035 ? (
        <div id="hero">
          <ImageHero size={225} type={"0"} deg={2} />
          <ImageHero size={240} type={"1"} deg={0} />
          <ImageHero size={250} type={"2"} deg={0} />
          <ImageHero size={238} type={""} deg={-5} />
        </div>
      ) : (
        <div id="hero">
          <ImageHero size={290} type={"0"} deg={0} />
          <ImageHero size={300} type={"2"} deg={0} />
          <ImageHero size={310} type={"1"} deg={0} />
          <ImageHero size={285} type={""} deg={-5} />
        </div>
      )}
    </section>
  );
};

export default Home;