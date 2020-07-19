let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "PHP";
languageConfig.description =
  "PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.";
languageConfig.url = "https://www.php.net/";
languageConfig.founders = ["Rasmus Lerdorf"];
languageConfig.developers = ["Zend Technologies"];
languageConfig.years = ["1995"];
languageConfig.extensions = [".php"];
languageConfig.builders = {};
languageConfig.compilers = {
  php7: {
    install: "scoop install php",
    command: "php",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.php.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "PowerShell.exe -File installComposer.ps1",
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
