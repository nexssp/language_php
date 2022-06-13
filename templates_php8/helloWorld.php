<?php
// Nexss PROGRAMMER 2.x - PHP
// Default template for JSON Data
// STDIN
$NexssStdin = fgets(STDIN);
$parsedJson = json_decode($NexssStdin, true);

// Modify Data
$parsedJson["phpOutput"] = "Hello from PHP! " . (string)phpversion();
$NexssStdout = json_encode($parsedJson, JSON_UNESCAPED_UNICODE);

// STDOUT
fwrite(STDOUT, $NexssStdout);
