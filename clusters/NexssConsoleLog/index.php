<?php
require __DIR__ . '/vendor/autoload.php';

//$emitter = new SocketIO\Emitter(array('port' => '9369', 'host' => '127.0.0.1'));

use ElephantIO\Client;
use ElephantIO\Engine\SocketIO\Version2X;

$client = new Client(new Version2X('http://localhost:9369', [
    'headers' => [
        'X-My-Header: websocket rocks',
        'Authorization: Bearer 12b3c4d5e6f7g8h9i'
    ]
]));
$client->initialize();

$client->emit('AConsole_mapoART', [
		'AConsoleType' => 'AConsole.log', 
		'AppId' => 'AEFX', //We make separate plugin for each app in adobe
		'msg' =>  "This is example of the message"
	]
);

$client->close();
exit;