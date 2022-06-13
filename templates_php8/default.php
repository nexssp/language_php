<?php
// Nexss PROGRAMMER 2.x - PHP 8
// Default template for JSON Data
// STDIN
$NexssStdin = fgets(STDIN);
$parsedJson = json_decode($NexssStdin, true);

// Modify Data
$parsedJson["test"] = "test";
// $parsedJson["test"] = "test";
if (version_compare(phpversion(), '5.4.0', '<')) {
    $NexssStdout = json_encode($parsedJson);
} else {
    $NexssStdout = json_encode($parsedJson, JSON_UNESCAPED_UNICODE);
}

// STDOUT
fwrite(STDOUT, $NexssStdout);
