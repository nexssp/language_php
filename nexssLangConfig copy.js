// You can use node code here.
// const exec = require("child_process").execSync;
// const phpVersion = exec('php -r "echo phpversion();"');
const phpVersion = "7";
module.exports = {
  description: "PHP ${phpVersion}",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "php",
  extension: ".php",
  executeCommandLine: "php -r",
  InteractiveShell: "php -a",
  packageManager: {
    win32: "composer require",
    darwin: "composer require",
    linux: "composer require"
  },
  packageManagerInstallation: {
    win32: "scoop install composer",
    darwin: "scoop install composer",
    linux:
      "curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer"
  },
  packageInstallDescription: {
    all:
      "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';"
  },
  installOnError: {
    win32: "scoop install php",
    darwin: "brew install php",
    linux: "apt install php -y"
  },
  errors: {
    "Uncaught Error: Class '(.*?)'": {
      win32: "nexss install php <package>",
      darwin: "nexss install php <package>",
      linux: "nexss install php <package>"
    }
  },
  url: "https://php.net"
};
