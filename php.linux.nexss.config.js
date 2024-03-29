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

languageConfig.languagePackageManagers.composer.installation = `php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
HASH="$(wget -q -O - https://composer.github.io/installer.sig)"
php -r "if (hash_file('sha384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
${sudo}php composer-setup.php --install-dir=/usr/local/bin --filename=composer
php -r "unlink('composer-setup.php');"`;
const distName = process.distro;
// TODO: Later to cleanup this config file !!
switch (distName) {
  case process.distros.ORACLE:
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
  case process.distros.ALPINE:
    compilerConfig.install = `${sudo}apk add php php7-json php-imap`;
    break;
  case process.distros.ARCH:
    compilerConfig.install = `${sudo}pacman -Sy --noconfirm php php-imap`;
    break;
  case process.distros.FEDORA:
    compilerConfig.install = `${sudo}dnf install -y php php-json`;
    break;
  case process.distros.CENTOS:
    compilerConfig.install = `${sudo}yum install -y epel-release* && yum install -y php php-json php-imap`;
    break;
  case process.distros.SUSE_LEAP:
  case process.distros.SUSE_TUMBLEWEED:
    compilerConfig.install = `${sudo}zypper -n install php7 php7-json`;
    break;
  case process.distros.AMAZON:
  case process.distros.AMAZON_AMI:
  case process.distros.RHEL:
    compilerConfig.install = `${sudo}yum install -y php php-json php-imap`;
    break;
  default:
}

languageConfig.dist = distName;

languageConfig.compilers.php8 = Object.assign(
  languageConfig.compilers.php8,
  compilerConfig
);
languageConfig.compilers.php8ini = Object.assign(
  languageConfig.compilers.php8ini,
  compilerConfig
);

module.exports = languageConfig;
