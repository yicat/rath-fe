const path = require("path");
const rewireDevLess = require("./config/rewire-less");
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = {
  webpack: function(config, env) {
    config = rewireDevLess(config, env);

    return config;
  }
};
