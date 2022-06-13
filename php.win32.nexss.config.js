let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
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
  php8: {
    install: "scoop install php",
    command: "php",
    args: "<file>",
    // args:
    //   "-c " + require("path").resolve(__dirname + "/etc/php.ini") + " <file>",
    // run: "php -r", This will replace the main run (languageConfig.run) if per compiler needed.
    templates: `templates_php8`,
  },
  php74: {
    install: "scoop install php74",
    command: "php",
    args:
      "-c " + require("path").resolve(__dirname + "/etc/php.ini") + " <file>",
    // run: "php -r", This will replace the main run (languageConfig.run) if per compiler needed.
  },
};

// languageConfig.run = () => {
//   console.log(languageConfig);
// };
languageConfig.run = "<currentCommand> -r";
languageConfig.errors = require("./nexss.php.errors");
languageConfig.languagePackageManagers = {
  composer: {
    installation: "PowerShell.exe -File installComposer.ps1",
    messageAfterInstallation:
      "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';", //this message will be displayed after this package manager installation, maybe some action needed etc.
    installed: "composer installed",
    search: "composer search",
    install: "composer require",
    uninstall: "composer remove",
    help: "composer",
    version: "<currentCommand> --version",
    init: () => {},
  },
};

module.exports = languageConfig;
