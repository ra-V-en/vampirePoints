<?php
	if ($_SERVER['SERVER_NAME'] == 'vampire.acwpd.dev') {
		$host = 'localhost';
	} else {
		$host = 'sdgame.db';
	}
	$con = new PDO('mysql:host=' . $host . ';dbname=vampires','prince','letmebeyourruler');
?>