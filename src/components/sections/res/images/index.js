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

  pump_perfect:
    tryRequire("./pump_perfect.png") || require("./questionMark.png"),
  trabajo_permiso:
    tryRequire("./trabajo_permisos.png") || require("./questionMark.png"),
};
