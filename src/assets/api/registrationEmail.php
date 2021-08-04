<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata, true); 

     $name = $request['name'];
     $surname = $request['surname'];
     $email = $request['email'];
     $pwd = $request['pwd'];

     if(!empty($name) && !empty($surname) && !empty($email) && !empty($pwd)){
        $message = "Welcome to VUE-BLOG ".$name." ".$surname. ". Your registration was successful and you registered with the following email address:\r\n ".$email. " and password: ". $pwd.".";
     }else{
        $message = "This message is only visible to the garyallin.uk It is a contact request message from your website from " .$name. " and email address: " .$email;
     }    
     $to = $email;
     $subject = "Registration Request";     
     $headers = "From:".$name."\r\n";
     $headers .= "BCC: me@garyallin.uk".PHP_EOL;
     $headers .= "Reply-To:".$email;

    mail( $to, $subject, $message, $headers);
}
?>