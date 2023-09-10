const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

export default {
  PF_1: tryRequire("./PF-1.png") || require("./questionMark.png"),
  PF_2: tryRequire("./PF-2.png") || require("./questionMark.png"),
  PF_3: tryRequire("./PF-3.png") || require("./questionMark.png"),

  TP_1: tryRequire("./TP-1.png") || require("./questionMark.png"),
  TP_2: tryRequire("./TP-2.png") || require("./questionMark.png"),
  TP_3: tryRequire("./TP-3.png") || require("./questionMark.png"),

  WS_1: tryRequire("./dron-model.png") || require("./questionMark.png"),
  WS_2: tryRequire("./catalogo-web.png") || require("./questionMark.png"),
  WS_3: tryRequire("./menu-web.png") || require("./questionMark.png"),

  pump_perfect:
    tryRequire("./pump_perfect.png") || require("./questionMark.png"),
  trabajo_permiso:
    tryRequire("./trabajo_permisos.png") || require("./questionMark.png"),
  web_model: tryRequire("./conceptual-3D.png") || require("./questionMark.png"),

  hero_pump: tryRequire("./pump-hero.svg") || require("./questionMark.png"),
  hero_permisos:
    tryRequire("./permisos-hero.svg") || require("./questionMark.png"),
  hero_placeholder:
    tryRequire("./image 1.svg") || require("./questionMark.png"),
  star: tryRequire("./star-one.svg") || require("./questionMark.png"),
  star_two: tryRequire("./star-two.svg") || require("./questionMark.png"),
  star_three: tryRequire("./star-three.svg") || require("./questionMark.png"),
  person: tryRequire("./rh.svg") || require("./questionMark.png"),
  telephone: tryRequire("./telephone.svg") || require("./questionMark.png"),
  tarjeta: tryRequire("./tarjeta.svg") || require("./questionMark.png"),
  mesa: tryRequire("./mesa-animada.svg") || require("./questionMark.png"),
  arbol: tryRequire("./arbol-ardilla.svg") || require("./questionMark.png"),
  flores: tryRequire("./flores.svg") || require("./questionMark.png"),
  flutter: tryRequire("./flutter.svg") || require("./questionMark.png"),
  firebase: tryRequire("./firebase.svg") || require("./questionMark.png"),
  dart: tryRequire("./dart.svg") || require("./questionMark.png"),
  react: tryRequire("./react.svg") || require("./questionMark.png"),
  js: tryRequire("./js.svg") || require("./questionMark.png"),
};
