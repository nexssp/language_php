let languageConfig = Object.assign({}, require("./php.win32.nexss.config"));
languageConfig.errors = require("./nexss.php.errors");

// Ubuntu, Debian
languageConfig.compilers = {
  php7: {
    install: "apt install -y php",
    command: "php",
    args: "<file>",
    help: ``,
  },
};

languageConfig.languagePackageManagers = {
  composer: {
    installation:
      "apt update && apt install curl && curl -s https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer",
    messageAfterInstallation:
      "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "composer installed",
    search: "composer search",
    install: "composer require",
    uninstall: "composer remove",
    help: "composer",
    version: "composer version",
    init: () => {},
  },
};

// If statement must be here for older versions nexss <2.1.12
if (require("fs").existsSync(`${process.env.NEXSS_SRC_PATH}/lib/osys.js`)) {
  const dist = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`).dist;
  switch (dist()) {
    case "Oracle":
    case "Oracle Linux Server":
      languageConfig.compilers.php7.install = "microdnf install php";
      languageConfig.languagePackageManagers.composer.installation =
        "microdnf update && microdnf install curl && curl -s https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer";
      break;
    case "Alpine Linux":
      languageConfig.compilers.php7.install = "apk add php";
      languageConfig.languagePackageManagers.composer.installation =
        "apk update && apk install curl && curl -s https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer";
      break;
  }
}

module.exports = languageConfig;
