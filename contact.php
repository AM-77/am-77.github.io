<?php
$to      = 'amine.griche77@gmail.com';
$subject = $_POST['name'];
$message = $_POST['message'];
$headers = 'From: '. $_POST['email'] . "\r\n" .
    'Reply-To: ' . $to . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
header("Location: http://am-77.gtihub.io/");
?> 
