<?php

$conn = "";

try {
    $servername = "sql578.main-hosting.eu";
	$username = "u475920781_Dts4c";
	$password = "Dts4c2022";
	$dbname="u475920781_Dts4c";

	$conn = new PDO(
		"mysql:host=$servername; dbname=u475920781_Dts4c" ,$username, $password);
	
$conn->setAttribute(PDO::ATTR_ERRMODE,
					PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
	echo "Connection failed: " . $e->getMessage();
}

?>
