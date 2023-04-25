const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

export default {
  close_tab: tryRequire("./close.svg") || require("./questionMark.png"),
};
