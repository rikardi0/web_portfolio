const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

export default {
  questionMark: require("./questionMark.png"),
  gmail: tryRequire("./email.svg") || require("./questionMark.png"),
  gitHub: tryRequire("./github.svg") || require("./questionMark.png"),
  linkedIn: tryRequire("./linkedin.svg") || require("./questionMark.png"),
  close_tab: tryRequire("./close.svg") || require("./questionMark.png"),
  minimize: tryRequire("./minimize.svg") || require("./questionMark.png"),
};
