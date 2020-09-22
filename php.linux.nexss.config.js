let languageConfig = Object.assign({}, require("./php.win32.nexss.config"));
languageConfig.errors = require("./nexss.php.errors");

let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}

// Ubuntu, Debian
languageConfig.compilers = {
  php7: {
    install: `${sudo}apt install -y php`,
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
  languageConfig.languagePackageManagers.composer.installation = `php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '8a6138e2a05a8c28539c9f0fb361159823655d7ad2deecb371b04a83966c61223adc522b0189079e3e9e277cd72b8897') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"`;
  const { dist, version } = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);
  const distName = dist();
  // TODO: Later to cleanup this config file !!
  switch (distName) {
    case "Oracle":
    case "Oracle Linux Server":
      if (version) {
        //if here for older versions of nexssp
        const distVersion = version(); // *1 converts to number
        if (distVersion >= 8) {
          // TODO: recognize the slim version
          languageConfig.compilers.php7.install = `${sudo}dnf update -y && ${sudo}dnf install -y oracle-epel-release* && ${sudo}dnf install -y php php-json`;
          languageConfig.languagePackageManagers.composer.installation = `${sudo}dnf update -y && ${sudo}dnf install -y curl && curl -s https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer`;
        } else {
          languageConfig.compilers.php7.install = `${sudo}yum update -y && ${sudo}yum install -y oracle-epel-release* && ${sudo}yum install -y php php-json php-imap`;
          languageConfig.languagePackageManagers.composer.installation = `${sudo}yum update -y && ${sudo}yum install -y curl && curl -s https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer`;
        }
      }
      break;
    case "Alpine Linux":
      languageConfig.compilers.php7.install = `${sudo}apk add php php7-json php-imap`;
      break;
    case "Arch Linux":
      languageConfig.compilers.php7.install = `${sudo}pacman -Sy --noconfirm php php-imap`;
      break;
    case "Fedora":
      languageConfig.compilers.php7.install = `${sudo}dnf install -y php php-json php-imap`;
      break;
    case "CentOS Linux":
      languageConfig.compilers.php7.install = `${sudo}yum install -y epel-release* && yum install -y php php-json php-imap`;
      break;
    case "openSUSE Leap":
    case "openSUSE Tumbleweed":
      languageConfig.compilers.php7.install = `${sudo}zypper -n install php7 php7-json`;
      break;
    case "Amazon Linux":
    case "RHEL Linux":
      languageConfig.compilers.php7.install = `${sudo}yum install -y php php-json php-imap`;
      break;
    default:
  }

  languageConfig.dist = distName;
} else {
  languageConfig.dist = "Ubuntu";
}

module.exports = languageConfig;
