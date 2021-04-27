<?php
# Nexss PROGRAMMER 2.0.0 - PHP
# Default template for JSON Data
# STDIN
$NexssStdin = fgets(STDIN);
$parsedJson = json_decode($NexssStdin, true);

# Modify Data
$parsedJson["phpOutput"] = "Hello from PHP! " . (string)phpversion();
// $parsedJson["test"] = "test";
if (version_compare(phpversion(), '5.4.0', '<')) {
    $NexssStdout = json_encode($parsedJson);
} else {
    $NexssStdout = json_encode($parsedJson, JSON_UNESCAPED_UNICODE);
}


# STDOUT
fwrite(STDOUT, $NexssStdout);
