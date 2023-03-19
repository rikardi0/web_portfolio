import React from "react";
import "./Hero.css";
import Texture from "../ui/Texture.js";
import ImgAsset from "../images";
export default function Hero() {
  return (
    <div id="hero">
      <header id="head">
        <span className="title">Ricardo Hurtado</span>
        <span className="description">
          I’m an a mobile app developer with experience developing apps using
          Java and Flutter I'm always looking to expand my skills
        </span>
      </header>
      <section id="closer_container">
        <Texture />
        <span className="closer">Let's work together!</span>
      </section>
      <div id="contacts">
        <img className="logo_vector" src={ImgAsset.GitHub} />
        <img className="logo_vector" src={ImgAsset.LinkedIn} />
        <img className="logo_vector" src={ImgAsset.Gmail} />
      </div>
    </div>
  );
}
