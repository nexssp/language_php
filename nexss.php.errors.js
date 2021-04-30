const toCheckPHPini = "\nTo check your php.ini location run 'php --ini'.";
module.exports = {
  "PHP Notice:  Undefined variable: (?<variable>.*?) in (?<folder>.*?) on line (?<line>.*?)$":
    "<variable> has not been found. Check <folder> on line <line>",
  "Call to undefined function json_decode": `You may need to run '${process.replacePMByDistro(
    "apt-get install -y"
  )} php-json'`,
  "Call to undefined function imap_open":
    `You may need to run '${process.replacePMByDistro(
      "apt-get install -y"
    )} php-imap' or
enable the extension in the php.ini file by uncommenting or adding the line: extension=imap.` +
    toCheckPHPini,
  "Class 'Locale' not found":
    "Please enable php_intl extension in your php.ini file." + toCheckPHPini,
  "Unable to load dynamic library '(?<variable>.*?)'": `Please install the php-<variable> by command: '${process.replacePMByDistro(
    "apt-get install -y"
  )} php-<variable>'`,
};
