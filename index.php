<?php
	include_once 'connect.php';
	spl_autoload_register(function ($class) {
		include 'classes/' . $class . '.class.php';
	});

?>
<html>
	<head>
		<meta charset='UTF-8'>
		<link rel="stylesheet" type="text/css" href="basic.css">
		<title>Freebies / XP checker for V:tM characters</title>
		<script type="text/javascript" src="ACWPD.js"></script>
		<script type="text/javascript" src="splash.js"></script>
		<script type="text/javascript" src="analytics.js"></script>
	</head>
	<body>
		<h1>White Wolf character sheet generator</h1>
		<p>I see the look in your eyes. The look that says, "I have a PDF of the character sheet. Heck, I have the famous fillable sheets from Mr. Gone! What do I need this site for?"</p>
		<p> Heh. This is, as far as I know, the <strong>only</strong> character sheet generator that will actually count your freebie points and XP, and make sure your math is right.</p>
		<p> So have at it. What do you have to lose, but a few minutes?</p>
		<hr>
		<div id="characterArea" class="characterContainer">
			<div id="newCharacter" class="characterBox">
				<div class="spacer"></div>
				<p>New Vampire<br />
				No Clan (yet)<br />
				15 freebies<br />
				15 XP</p>
			</div>
			<div class='holder'>
<?php
			for ($i=0;$i<count($fiveChars);$i++) {
				$data = unserialize($fiveChars[$i]['Data']);
				$thisChar = $fiveChars[$i];
				echo "<div id='load" . $thisChar['UID'] . "' class='loadBox " . $data['fluff']['clan'] . "'>" . "\n" . 
					"<div class='spacer'></div>" . "\n" . 
					"<p>" . $data['fluff']['character'] . "<br />" . "\n" . 
					$data['fluff']['clan'] . "<br />" . "\n" . 
					"15 freebies<br />" . "\n" . 
					"15 XP" . "</p>" . "\n" . 
				"</div>";
				}
?>
			</div>
		</div>
<?php
	require_once('footer.php');
?>