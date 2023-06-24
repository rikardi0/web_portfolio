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
        description: [
          "Pump Perfect es una herramienta poderosa diseñada para ayudar en el diseño de sistemas de bombas de agua. Proporciona cálculos rápidos y precisos para los requisitos de potencia, pérdidas y cabeza neta de succión de tu sistema.",
          "La app aprovecha el poder de Flutter para crear una interfaz de usuario atractiva e intuitiva, brindando una experiencia consistente en múltiples plataformas, incluyendo iOS y Android.",
        ],
        technologies: [
          {
            url: Image.dart,
            link: "https://dart.dev/",
            title: "Dart",
          },
          {
            url: Image.flutter,
            link: "https://flutter.dev/",
            title: "Flutter",
          },
        ],
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
        description: [
          "Fue desarrollada utilizando Flutter, con la intención de crear una aplicación multiplataforma. Se integra Firebase como tecnología backend, específicamente Firebase Realtime Database.",

          "Esto permite que la aplicación almacene y recupere de manera segura los datos de solicitud de permisos, facilitando a los supervisores y trabajadores realizar solicitudes, dar seguimiento y aprobar tareas de alto riesgo de manera eficiente.",
        ],
        technologies: [
          {
            url: Image.dart,
            link: "https://dart.dev/",
            title: "Dart",
          },
          {
            url: Image.flutter,
            link: "https://flutter.dev/",
            title: "Flutter",
          },
          {
            url: Image.firebase,
            link: "https://firebase.google.com/",
            title: "Firebase",
          },
        ],
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
        description: [
          "Pump perfect is a powerful tool designed to assist in designs of water pumps systems. It provides quick and accurate calculations for power requirements, losses, and net positive suction head.",
          "It leverages the power of Flutter to create a visually appealing and intuitive user interface to deliver a consistent experience across multiple platforms, including iOS and Android.",
        ],
        technologies: [
          {
            url: Image.dart,
            link: "https://dart.dev/",
            title: "Dart",
          },
          {
            url: Image.flutter,
            link: "https://flutter.dev/",
            title: "Flutter",
          },
        ],
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
        description: [
          "Was developed using Flutter, with the intention of a cross-platform app. Firebase is integrated as the backend technology, specifically Firebase Realtime Database.",
          "This enables the app to securely store and retrieve permission request data, facilitating  the supervisors and workers to efficiently request, track, and approve high-risk tasks.",
        ],
        technologies: [
          {
            url: Image.dart,
            link: "https://dart.dev/",
            title: "Dart",
          },
          {
            url: Image.flutter,
            link: "https://flutter.dev/",
            title: "Flutter",
          },
          {
            url: Image.firebase,
            link: "https://firebase.google.com/",
            title: "Firebase",
          },
        ],
      },
    ],
  },
};

export default projectContent;
