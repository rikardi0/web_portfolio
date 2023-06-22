import Image from "../images/index";
import ImgProject from "../svg/ImgProject";

const projectContent = {
  spanish: {
    projectList: [
      {
        path: <ImgProject img={Image.pump_perfect} />,
        slideImg: [
          {
            url: Image.PF_1,
          },
          {
            url: Image.PF_2,
          },
          {
            url: Image.PF_3,
          },
        ],
        title: "Pump Perfect",
        description: "Lo mejor de lo mejor",
        technologies: ["Flutter", "Dart"],
      },
      {
        path: <ImgProject img={Image.trabajo_permiso} />,
        slideImg: [
          {
            url: Image.TP_1,
          },
          {
            url: Image.TP_2,
          },
          {
            url: Image.TP_3,
          },
        ],
        title: "Permisos de Trabajo",
        description: "Lo mejor de lo mejor",
        technologies: ["Firebase", "Flutter", "Dart"],
      },
    ],
  },
  english: {
    projectList: [
      {
        path: <ImgProject img={Image.pump_perfect} />,
        slideImg: [
          {
            url: Image.PF_1,
          },
          {
            url: Image.PF_2,
          },
          {
            url: Image.PF_3,
          },
        ],
        title: "Pump Perfect",
        description: "Lo mejor de lo mejor",
        technologies: ["Flutter", "Dart"],
      },
      {
        path: <ImgProject img={Image.trabajo_permiso} />,
        slideImg: [
          {
            url: Image.TP_1,
          },
          {
            url: Image.TP_2,
          },
          {
            url: Image.TP_3,
          },
        ],
        title: "Work Permissions",
        description: "Lo mejor de lo mejor",
        technologies: ["Firebase", "Flutter", "Dart"],
      },
    ],
  },
};

export default projectContent;
