import Image from "../images/index";
import ImgProject from "../svg/ImgProject";

const Dart = {
  url: Image.dart,
  link: "https://dart.dev/",
  title: "Dart",
};
const Flutter = {
  url: Image.flutter,
  link: "https://flutter.dev/",
  title: "Flutter",
};
const Firebase = {
  url: Image.firebase,
  link: "https://firebase.google.com/",
  title: "Firebase",
};
const React = {
  url: Image.react,
  link: "https://es.react.dev/",
  title: "React",
};
const JavaScript = {
  url: Image.js,
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  title: "JavaScript",
};

const PumpPerfectImageList = [
  {
    url: Image.PF_1,
  },
  {
    url: Image.PF_2,
  },
  {
    url: Image.PF_3,
  },
];
const PumpPerfectTech = [Dart, Flutter];

const TrabajoPermisoImageList = [
  {
    url: Image.TP_1,
  },
  {
    url: Image.TP_2,
  },
  {
    url: Image.TP_3,
  },
];
const TrabajoTech = [Dart, Flutter, Firebase];
const WebSWImageList = [
  {
    url: Image.WS_1,
  },
  {
    url: Image.WS_2,
  },
  {
    url: Image.WS_3,
  },
];
const WebSolidworksTech = [React, JavaScript];

const projectContent = {
  spanish: {
    projectList: [
      {
        figma: "Explora el prototipo interactivo en figma",
        path: <ImgProject img={Image.pump_perfect} />,
        slideImg: PumpPerfectImageList,

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
        technologies: PumpPerfectTech,
      },
      {
        figma: "Explora el prototipo interactivo en figma",
        path: <ImgProject img={Image.trabajo_permiso} />,
        slideImg: TrabajoPermisoImageList,
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
        technologies: TrabajoTech,
      },
      {
        figma: " Clickea el link para visitar la página",
        path: <ImgProject img={Image.web_model} />,
        slideImg: WebSWImageList,

        title: "Conceptual 3D Designs",
        description: [
          {
            first:
              "Nuestra misión es crear un portafolio 3D atractivo y visualmente impresionante que muestre una colección seleccionada de modelos 3D en formato GLTF utilizando el poder de React Three Fiber",
            second:
              "Esta experiencia digital inmersiva servirá como una representación dinámica de nuestras habilidades en modelado 3D y demostrará nuestra experiencia en desarrollo web con React y Three.js.",
            figma: "https://www.conceptual3ddesigns.com/",
          },
        ],
        technologies: WebSolidworksTech,
      },
    ],
  },
  english: {
    projectList: [
      {
        figma: "Explore the interactive app prototype on Figma ",
        path: <ImgProject img={Image.pump_perfect} />,
        slideImg: PumpPerfectImageList,
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
        technologies: PumpPerfectTech,
      },
      {
        figma: "Explore the interactive app prototype on Figma ",
        path: <ImgProject img={Image.trabajo_permiso} />,
        slideImg: TrabajoPermisoImageList,
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
        technologies: TrabajoTech,
      },
      {
        figma: " Click the link to see the website",
        path: <ImgProject img={Image.web_model} />,
        slideImg: WebSWImageList,
        title: "Conceptual 3D Designs",
        description: [
          {
            first:
              "This portfolio create an engaging and visually stunning 3D portfolio that showcases a curated collection of 3D models, in GLTF format using the power of React Three Fiber. ",
            second:
              "This immersive digital experience will serve as a dynamic representation of 3D modeling skills and demonstrate our expertise in web development with React and Three.js.",
            figma: "https://www.conceptual3ddesigns.com/",
          },
        ],
        technologies: WebSolidworksTech,
      },
    ],
  },
};

export default projectContent;
