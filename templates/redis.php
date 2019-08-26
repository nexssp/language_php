<?php
include_once dirname(__FILE__) . "/../vendor/autoload.php";

$redis = new Predis\Client([
    'scheme' => 'tcp',
    'host' => '127.0.0.1',
    'port' => 6379
]);

$redis->publish('mychannel', 'Nexss Redis implementation!');