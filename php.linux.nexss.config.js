let languageConfig = Object.assign({}, require("./php.win32.nexss.config"));
languageConfig.errors = require("./nexss.php.errors");

let sudo = process.sudo;

// Ubuntu, Debian
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

let compilerConfig = {};
// If statement must be here for older versions nexss <2.1.12
if (require("fs").existsSync(`${process.env.NEXSS_SRC_PATH}/lib/osys.js`)) {
  languageConfig.languagePackageManagers.composer.installation = `php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '8a6138e2a05a8c28539c9f0fb361159823655d7ad2deecb371b04a83966c61223adc522b0189079e3e9e277cd72b8897') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"`;
  const distName = process.distro;
  // TODO: Later to cleanup this config file !!
  switch (distName) {
    case "Oracle":
    case "Oracle Linux Server":
      //if here for older versions of nexssp
      const distVersion = process.distroVersion * 1; // *1 converts to number
      if (distVersion >= 8) {
        // TODO: recognize the slim version
        compilerConfig.install = `${sudo}dnf update -y && ${sudo}dnf install -y oracle-epel-release* && ${sudo}dnf install -y php php-json php-pdo php-intl`;
        languageConfig.languagePackageManagers.composer.installation = `${sudo}dnf update -y && ${sudo}dnf install -y curl && curl -s https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer`;
      } else {
        compilerConfig.install = `${sudo}yum update -y && ${sudo}yum install -y oracle-epel-release* && ${sudo}yum install -y php php-json php-imap php-pdo php-intl`;
        languageConfig.languagePackageManagers.composer.installation = `${sudo}yum update -y && ${sudo}yum install -y curl && curl -s https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer`;
      }

      break;
    case "Alpine Linux":
      compilerConfig.install = `${sudo}apk add php php7-json php-imap`;
      break;
    case "Arch Linux":
      compilerConfig.install = `${sudo}pacman -Sy --noconfirm php php-imap`;
      break;
    case "Fedora":
      compilerConfig.install = `${sudo}dnf install -y php php-json php-imap`;
      break;
    case "CentOS Linux":
      compilerConfig.install = `${sudo}yum install -y epel-release* && yum install -y php php-json php-imap`;
      break;
    case "openSUSE Leap":
    case "openSUSE Tumbleweed":
      compilerConfig.install = `${sudo}zypper -n install php7 php7-json`;
      break;
    case "Amazon Linux":
    case "RHEL Linux":
      compilerConfig.install = `${sudo}yum install -y php php-json php-imap`;
      break;
    default:
  }

  languageConfig.dist = distName;
} else {
  languageConfig.dist = "Ubuntu";
}

languageConfig.compilers.php8 = Object.assign(
  languageConfig.compilers.php8,
  compilerConfig
);
languageConfig.compilers.php8ini = Object.assign(
  languageConfig.compilers.php8ini,
  compilerConfig
);

module.exports = languageConfig;
