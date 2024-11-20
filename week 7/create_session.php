<?php
// Start the session
session_start();

// Set session variables
$_SESSION['username'] = 'ashutosh';
$_SESSION['email'] = 'ashu@example.com';

// Display a message confirming the session is created
echo "Session variables are set.<br>";
echo "Username: " . $_SESSION['username'] . "<br>";
echo "Email: " . $_SESSION['email'] . "<br>";
?>
<a href="view_session.php">Go to the next page to view session variables</a>
