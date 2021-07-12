<?php
include_once('config.php');

// Extract, validate and sanitize the id.
echo $_GET['id'];
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($conn, (int)$_GET['id']) : false;

if(!$id)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `messages` WHERE `id` ='{$id}' LIMIT 1";

if(mysqli_query($conn, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}
?>