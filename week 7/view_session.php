<?php
// Start the session
session_start();

// Access session variables
if (isset($_SESSION['username']) && isset($_SESSION['email'])) {
    echo "Welcome " . $_SESSION['username'] . "!<br>";
    echo "Your email is: " . $_SESSION['email'] . "<br>";
} else {
    echo "No session data available.";
}
?>
<a href="destroy_session.php">Click here to destroy session</a>
