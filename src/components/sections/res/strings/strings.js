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
      contact: "Contact",
      contactDescription:
        "If you have any questions about my services or just want to say hello, feel free to reach out to me through my social media channels",
      download: "Download CV",
      about: [
        "I'm a 23-year-old mechanical engineer with a strong passion for app and web development.",
        "During my academic journey as a mechanical engineer, I realized that my true passion lay in the intersection of engineering and programming, where I could channel my creativity, problem-solving skills, and attention to detail.",
      ],
      call: "Collaborate. Innovate. Achieve.",
      skill: [
        `Flutter${rightArrow}`,
        `R e a c t ${downArrow}`,
        `Front-end ${homeArrow}`,
      ],
    },
    spanish: {
      description:
        "Soy un desarrollador de aplicaciones móviles con experiencia en Java y Flutter, siempre estoy buscando expandir mis habilidades.",
      aboutTitle: "Sobre-Mi",
      projectsTitle: "Proyectos",
      skillTitle: "habilidad",
      contact: "Contacto",
      contactDescription:
        "Si tienes alguna pregunta sobre mis servicios, no dudes en contactarme a través de mis redes sociales.",
      download: "Descargar CV",
      about: [
        "Soy un ingeniero mecánico de 23 años con una gran pasión por el desarrollo de aplicaciones y páginas web",
        "Durante mi trayectoria académica como ingeniero mecánico, me di cuenta de que mi verdadera pasión se encontraba en la intersección entre la ingeniería y la programación, donde podía canalizar mi creatividad, habilidades para resolver problemas y atención al detalle.",
      ],
      call: "Colabora. Innova. Consigue.",
      skill: [
        `Flutter${rightArrow}`,
        `J a v a ${downArrow}`,
        `Front-end ${homeArrow}`,
      ],
    },
  },
};

export default strings;
