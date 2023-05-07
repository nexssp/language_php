let languageConfig = Object.assign({}, require("./nodejs.win32.nexss.config"));

let sudo = process.sudo;

languageConfig.compilers = {
  php8: {
    install: `${sudo}apt install -y php`,
    command: "php",
    args: "<file>",
    help: ``,
  },
  php8ini: {
    install: `${sudo}apt install -y php`,
    command: "php",
    args:
      "-c " + require("path").resolve(__dirname + "/etc/php.ini") + " <file>",
    help: ``,
  },
};

const distro = process.distro;

// This function just replace all apt-get,apt to the right distribution pkg installer.
languageConfig.compilers.php8.install = process.replacePMByDistro(
  languageConfig.compilers.php8.install
);

languageConfig.compilers.php8ini.install = process.replacePMByDistro(
  languageConfig.compilers.php8ini.install
);


languageConfig.dist = distro;

module.exports = languageConfig;
