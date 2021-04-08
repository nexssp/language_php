let languageConfig = Object.assign({}, require("./php.linux.nexss.config"));
languageConfig.compilers = {
  php8: {
    install: "brew install php",
    command: "php",
    args:
      "-c " + require("path").resolve(__dirname + "/etc/php.ini") + " <file>",
    help: ``,
  },
};
