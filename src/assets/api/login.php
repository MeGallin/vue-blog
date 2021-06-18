<?php
require 'config.php';
// Get the posted data.
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
    $email = mysqli_real_escape_string($conn, trim($request->username));
    $pwd = mysqli_real_escape_string($conn, trim($request->password));

    $pwd = md5($pwd);
   
    $sql = "SELECT * FROM users where email='$email' and pwd='$pwd'";
    
    if($result = mysqli_query($conn,$sql))
        {
                $rows = array();
                while($row = mysqli_fetch_assoc($result))
                {
                    $rows[] = $row;
                }
                
                echo json_encode($rows);
        }
else
{
  http_response_code(404);
}
}
}
?>