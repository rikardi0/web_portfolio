import React, { useState, useEffect } from "react";
import img from "../res/images/index";
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
        <div id="star-container">
          <object
            id="star-one"
            className="stars"
            data={img.star}
            title="svg-star"
          />
          <object
            id="star-two"
            className="stars"
            data={img.star_two}
            title="svg-star"
          />
          <object
            id="star-three"
            className="stars"
            data={img.star_three}
            title="svg-star"
          />
        </div>
        <span className="description">{description}</span>
      </section>
      {window.innerWidth < 425 ? (
        <div id="hero">
          <ImageHero size={145} type={img.hero_permisos} deg={0} />
          <ImageHero size={160} type={img.hero_pump} deg={-5} />
        </div>
      ) : window.innerWidth < 500 ? (
        <div id="hero">
          <ImageHero size={155} type={img.hero_permisos} deg={2} />
          <ImageHero size={160} type={img.hero_pump} deg={0} />
        </div>
      ) : window.innerWidth < 780 ? (
        <div id="hero">
          <ImageHero size={160} type={img.hero_permisos} deg={0} />
          <ImageHero size={150} type={img.hero_pump} deg={-5} />
        </div>
      ) : window.innerWidth < 1035 ? (
        <div id="hero">
          <ImageHero size={215} type={img.hero_permisos} deg={0} />
          <ImageHero size={200} type={img.hero_pump} deg={0} />
        </div>
      ) : (
        <div id="hero">
          <object id="mesa" data={img.mesa} title="hero mesa" />
          <object id="person" data={img.person} title="person hero" />
          <ImageHero size={290} type={img.hero_permisos} deg={0} />
          <ImageHero size={245} type={img.hero_pump} deg={0} />
          <object id="flor" data={img.flores} title="hero flor" />
          <object id="arbol" data={img.arbol} title="hero arbol" />
        </div>
      )}
    </section>
  );
};

export default Home;
