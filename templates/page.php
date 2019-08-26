<style>
body {background-color:#faeaff;}
</style>
<?php
# Nexss PROGRAMMER 2.0.0 - PHP
# Default template for JSON Data
# STDIN
$NexssStdin = fgets(STDIN);
$parsedJson = json_decode($NexssStdin,true);

# Modify Data
$parsedJson["phpOutput"] = "Hello from PHP! " . (string)phpversion() ;
// $parsedJson["test"] = "test";
?>

<h1>It works! Nexss programmer!!!</h1>
<?php
foreach ($parsedJson as $key => $value) {
    print("<b>$key</b>: $value <BR/>");
}

//$NexssStdout = json_encode($parsedJson);

# STDOUT
// fwrite(STDOUT, $NexssStdout);
