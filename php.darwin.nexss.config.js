let languageConfig = Object.assign({}, require("./php.linux.nexss.config"));
languageConfig.compilers = {
  php7: {
    install: "brew install -y php",
    command: "php",
    args: "<file>",
    help: ``,
  },
};
