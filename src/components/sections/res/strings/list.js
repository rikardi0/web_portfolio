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
const WordPress = {
  url: Image.wordpress,
  link: "https://wordpress.com/",
  title: "WordPress",
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
const WebSoterImageList = [
  {
    url: Image.ST_1,
  },
  {
    url: Image.ST_2,
  },
  {
    url: Image.ST_3,
  },
];
const WebSoterTech = [WordPress];
const WebIconicImageList = [
  {
    url: Image.IC_1,
  },
  {
    url: Image.IC_2,
  },
  {
    url: Image.IC_3,
  },
];
const WebIconicTech = [React, JavaScript];

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
      {
        figma: " Clickea el link para visitar la página",
        path: <ImgProject img={Image.soter} />,
        slideImg: WebSoterImageList,

        title: "Soter",
        description: [
          {
            first:
              "Para la empresa Soter se creo una experiencia de usuario atractiva y adaptable a diversos dispositivos y tamaños de pantalla. El sitio web presenta de manera concisa y accesible información detallada sobre los servicios de seguridad ofrecidos, así como los cursos educativos disponibles para los visitantes interesados",
            second:
              "Se utilizó la plataforma de desarrollo WordPress para crear la interfaz de usuario.La elección de WordPress garantizó una experiencia de usuario fluida y efectiva, permitiendo a los visitantes explorar fácilmente los servicios ofrecidos",
            figma: "https://sotersorg.wordpress.com/",
          },
        ],
        technologies: WebSoterTech,
      },
      {
        figma: " Clickea el link para visitar la página",
        path: <ImgProject img={Image.iconic} />,
        slideImg: WebIconicImageList,

        title: "Iconic",
        description: [
          {
            first:
              "Esta pagina web, desarrollada con tecnologías modernas y creativas. Utilizando React como base, hemos creado una experiencia inmersiva en la que los usuarios pueden explorar los zapatos mas icnoicos de la NBA.",
            second:
              "Gracias a Three.js, hemos logrado una visualización realista y una interacción fluida en de cada par, permitiendo a los visitantes navegar y girar los modelos para una experiencia única en línea.",
            figma: "https://shoe-models.vercel.app/",
          },
        ],
        technologies: WebIconicTech,
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
      {
        figma: " Click the link to see the website",
        path: <ImgProject img={Image.soter} />,
        slideImg: WebSoterImageList,

        title: "Soter",
        description: [
          {
            first:
              "For the company Soter, an attractive and responsive user experience was created across various devices and screen sizes. The website presents detailed information concisely and accessibly about the security services offered, as well as the educational courses available for interested visitors.",
            second:
              "The WordPress development platform was used to create the user interface. The choice of WordPress ensured a smooth and effective user experience, allowing visitors to easily explore the services offered",
            figma: "https://sotersorg.wordpress.com/",
          },
        ],
        technologies: WebSoterTech,
      },
      {
        figma: " Click the link to see the website",
        path: <ImgProject img={Image.iconic} />,
        slideImg: WebIconicImageList,

        title: "Iconic",
        description: [
          {
            first:
              "This website, developed using modern and creative technologies and built on React, delivers an immersive experience where users can explore the most iconic NBA shoes. ",
            second:
              "Thanks to Three.js, we've achieved realistic visualization and smooth interaction for each pair, allowing visitors to navigate and rotate the models for a unique online experience.",
            figma: "https://shoe-models.vercel.app/",
          },
        ],
        technologies: WebIconicTech,
      },
    ],
  },
};

export default projectContent;
