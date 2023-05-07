let languageConfig = Object.assign({}, require("./php.win32.nexss.config"));

let sudo = process.sudo;

languageConfig.compilers = {
  php8: {
    install: `pkg install -y php`,
    command: "php",
    args: "<file>",
    help: ``,
  },
  php8ini: {
    install: `pkg install -y php`,
    command: "php",
    args:
      "-c " + require("path").resolve(__dirname + "/etc/php.ini") + " <file>",
    help: ``,
  },
};

const distro = process.distro;

languageConfig.dist = distro;

module.exports = languageConfig;
