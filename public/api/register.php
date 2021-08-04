<?php
require 'config.php';
// Get the posted data.
$postdata = file_get_contents("php://input");
$errors = array();
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);  
	
  // Sanitize.
  $name = mysqli_real_escape_string($conn, trim($request->name));
  $surname = mysqli_real_escape_string($conn, trim($request->surname));
  $email = mysqli_real_escape_string($conn, trim($request->email)); 
  $pwd = mysqli_real_escape_string($conn, trim($request->pwd));   
  $uuid = mysqli_real_escape_string($conn, trim($request->uuid));


  //CHeck if email exists
  $user_check_query = "SELECT * FROM users WHERE email='$email' LIMIT 1";
  $result = mysqli_query($conn, $user_check_query);
  $user = mysqli_fetch_assoc($result);

  // first check the database to make sure 
  // a user does not already exist with the same username and/or email;
  if ($user) { // if user exists
        if ($user['email'] === $email) {
      array_push($errors, "email already exists");
    }
  }
  print_r($errors);

  // Store.
  if (count($errors) == 0) {
    $pwd = md5($pwd);//encrypt the password before saving in the database

  $sql = "INSERT INTO users (`name`,`surname`, `email`,`pwd`,`uuid`) VALUES 
  ('$name','$surname','$email','$pwd','$uuid')";

  if(mysqli_query($conn,$sql))
  {
    http_response_code(201);
    $authdata = [
      'name'    => $name,
      'surname' => $surname,
      'email' => $email,
      'pwd' => $pwd,
      'uuid' => $uuid,
    ];
    echo json_encode($authdata);
  }
  else
  {
    http_response_code(422);
  }
} else {
  echo json_encode($errors);
}
}
?>