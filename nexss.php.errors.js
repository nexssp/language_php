const {
  getInstallCommandByDist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

module.exports = {
  "PHP Notice:  Undefined variable: (?<variable>.*?) in (?<folder>.*?) on line (?<line>.*?)$":
    "<variable> has not been found. Check <folder> on line <line>",
  "Call to undefined function json_decode": `You may need to run '${getInstallCommandByDist()} php-json'`,
  "Call to undefined function imap_open": `You may need to run '${getInstallCommandByDist()} php-imap' or
enable the extension in the php.ini file by uncommenting or adding the line: extension=imap.
To check your php.ini location run 'php --ini'.`,
};
