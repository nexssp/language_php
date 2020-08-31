let languageConfig = Object.assign({}, require("./php.win32.nexss.config"));
languageConfig.errors = require("./nexss.php.errors");
languageConfig.compilers = {
  php7: {
    install: "apt install php",
    command: "php",
    args: "<file>",
    help: ``,
  },
};
languageConfig.languagePackageManagers = {
  npm: {
    installation:
      "sudo apt-get update && sudo apt-get install curl && sudo curl -s https://getcomposer.org/installer | php && sudo mv composer.phar /usr/local/bin/composer",
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

module.exports = languageConfig;
