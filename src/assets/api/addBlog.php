<?php
require 'config.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);  
	
  // Sanitize.
  $uuid = mysqli_real_escape_string($conn, trim($request->uuid));
  $name = mysqli_real_escape_string($conn, trim($request->name));
  $heading = mysqli_real_escape_string($conn, trim($request->heading));
  $message = mysqli_real_escape_string($conn, trim($request->message));  
  $admin = mysqli_real_escape_string($conn, trim($request->admin)); 
  

  // Store.
  $sql = "INSERT INTO `messages`(`uuid`,`name`,`heading`, `message`, `admin`) VALUES 
  ('$uuid','$name','$heading','$message','$admin')";

  if(mysqli_query($conn,$sql))
  {
    http_response_code(201);
    $message = [
      'uuid' => $uuid,
      'name' => $name,
      'heading' => $heading,
      'message' => $message
    ];
    echo json_encode($message);
  }
  else
  {
    http_response_code(422);
  }
}
?>