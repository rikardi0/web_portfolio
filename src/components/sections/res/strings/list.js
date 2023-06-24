import Image from "../images/index";
import ImgProject from "../svg/ImgProject";

const projectContent = {
  spanish: {
    projectList: [
      {
        figma: "Explora el prototipo interactivo en",
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
          {
            first:
              "Pump Perfect es una herramienta poderosa diseñada para ayudar en el diseño de sistemas de bombas de agua. Proporciona cálculos rápidos y precisos para los requisitos de potencia, pérdidas y cabeza neta de succión de tu sistema.",
            second:
              "La app aprovecha el poder de Flutter para crear una interfaz de usuario atractiva e intuitiva, brindando una experiencia consistente en múltiples plataformas, incluyendo iOS y Android. ",
            figma:
              "https://www.figma.com/proto/v8RhaBwn0QDOyh76lnjynG/Pump-Perfect?type=design&node-id=2-8&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A8&mode=design",
          },
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
        figma: "Explora el prototipo interactivo en",
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
          {
            first:
              "Fue desarrollada utilizando Flutter, con la intención de crear una aplicación multiplataforma. Se integra Firebase como tecnología backend, específicamente Firebase Realtime Database.",
            second:
              "Esto permite que la aplicación almacene y recupere de manera segura los datos de solicitud de permisos, facilitando a los supervisores y trabajadores realizar solicitudes, dar seguimiento y aprobar tareas de alto riesgo de manera eficiente. ",
            figma:
              "https://www.figma.com/proto/9hHQIo7Vux33lP4V9GRx1M/Permisos-Trabajo?node-id=1-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
          },
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
        figma: "Explore the interactive app prototype on ",
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
          {
            first:
              "Pump perfect is a powerful tool designed to assist in designs of water pumps systems. It provides quick and accurate calculations for power requirements, losses, and net positive suction head.",
            second:
              "It leverages the power of Flutter to create a visually appealing and intuitive user interface to deliver a consistent experience across multiple platforms, including iOS and Android. ",
            figma:
              "https://www.figma.com/proto/v8RhaBwn0QDOyh76lnjynG/Pump-Perfect?type=design&node-id=2-8&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A8&mode=design",
          },
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
        figma: "Explore the interactive app prototype on ",
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
          {
            first:
              "Was developed using Flutter, with the intention of a cross-platform app. Firebase is integrated as the backend technology, specifically Firebase Realtime Database.",

            second:
              "This enables the app to securely store and retrieve permission request data, facilitating  the supervisors and workers to efficiently request, track, and approve high-risk tasks.",
            figma:
              "https://www.figma.com/proto/9hHQIo7Vux33lP4V9GRx1M/Permisos-Trabajo?node-id=1-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
          },
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
