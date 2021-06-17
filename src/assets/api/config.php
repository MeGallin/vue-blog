<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// $serverName = "localhost";
// $username   = "livenoti_nillagg";
// $password   = "My_Sql_248!!";
// $dbname     = "livenoti_MySql_blog";

$serverName = "localhost";
$username   = "root";
$password   = "";
$dbname     = "blog";
// Create connection
$conn = new mysqli($serverName, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>