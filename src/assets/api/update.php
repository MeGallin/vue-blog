<?php
include_once('config.php');

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata); 

     print_r($request)   ;

  // Validate.

  if ((int)$request->id < 1 ) {
    return http_response_code(400);
  }
    
  // Sanitize.
  $id = mysqli_real_escape_string($conn, (int)$request->id);
  $name = mysqli_real_escape_string($conn, trim($request->name));
  $heading = mysqli_real_escape_string($conn, trim($request->heading));
  $message = mysqli_real_escape_string($conn, trim($request->message)); 

  // Update.
  $sql = "UPDATE `messages` SET `name`='$name',`heading`='$heading',`message`='$message' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($conn, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}