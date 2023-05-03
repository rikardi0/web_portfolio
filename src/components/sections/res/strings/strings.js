const rightArrow = String.fromCharCode(parseInt("2794", 16));
const downArrow = String.fromCharCode(parseInt("21F2", 16));
const homeArrow = String.fromCharCode(parseInt("21D4", 16));
const strings = {
  body: {
    english: {
      description:
        "I'm an a mobile app developer with experience making apps using Java and Flutter, I'm always looking to expand my skills",
      aboutTitle: "About-Me",
      projectsTitle: "Projects",
      skillTitle: "skill-set",
      contact: "Let's team up!",
      download: "Download CV",
      about:
        "I'm an 23-year-old mechanical engineer with a passion for app and web development. I specialize in flutter and java, and my proficiency in design sets me apart from the competition. Let's work together to bring your vision to life!",
      skill: [
        `Flutter${rightArrow}`,
        `J a v a ${downArrow}`,
        `Front-end ${homeArrow}`,
      ],
    },
    spanish: {
      description:
        "Soy un desarrollador de aplicaciones móviles con experiencia en Java y Flutter, siempre estoy buscando expandir mis habilidades.",
      aboutTitle: "Sobre-Mi",
      projectsTitle: "Proyectos",
      skillTitle: "habilidad",
      contact: "Hagamos Eqiupo!",
      download: "Descargar CV",
      about:
        "Soy un ingeniero mecánico de 23 años apasionado por el desarrollo web y de aplicaciones. Me especializo en flutter y java, y mi competencia en diseño me diferencia. ¡Trabajemos juntos para cumplir su visión!",
      skill: [
        `Flutter${rightArrow}`,
        `J a v a ${downArrow}`,
        `Front-end ${homeArrow}`,
      ],
    },
  },
};

export default strings;
