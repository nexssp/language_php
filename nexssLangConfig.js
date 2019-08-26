const { ProgrammingLanguage } = require("../../lib/programmingLanguage");
const pl = new ProgrammingLanguage(".php");

// const exec = require("child_process").execSync;
// const phpVersion = exec('php -r "echo phpversion();"');
const phpVersion = "7";
pl.add("title", "php");
pl.add("description", `PHP ${phpVersion}`);
pl.add("packageManager", { all: "composer require" });
pl.add("packageManagerInstallation", {
  win32: "PowerShell.exe -File installComposer.ps1",
  linux: "bash install/installComposer.sh",
  darwin: "bash install/installComposer.sh"
});

pl.add("packageManagerUpdate", {
  win32: "PowerShell.exe -File updateComposer.ps1",
  linux: "bash install/updateComposer.sh",
  darwin: "bash install/updateComposer.sh"
});

// pl.add("compilerInstallation", {
//   win32: "scoop install <package>",
//   linux: "sudo apt-get -y install <package>",
//   darwin: "brew install <package>"
// });
pl.add("packageManager", {
  all: "composer require <package>"
});
pl.add("afterPackageInstallMessage", {
  all:
    "Add to the top of your php file(s): require __DIR__ . '/vendor/autoload.php';"
});
pl.add("url", "https://php.net");
pl.addError("Uncaught Error: Class '(.*?)'", {
  win32: "nexss install php <package>",
  darwin: "nexss install php <package>",
  linux: "nexss install php <package>"
});

pl.addHelp("executeCommandLine", "php -r");
pl.addHelp("InteractiveShell", "php -a");

module.exports = pl.data;
