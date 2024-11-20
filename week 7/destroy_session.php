<?php
// Start the session
session_start();

// Destroy all session data
session_unset();  // Remove all session variables
session_destroy();  // Destroy the session

// Optionally, you can also delete the session cookie
setcookie(session_name(), '', time() - 3600);  // Expire the session cookie

echo "Session destroyed. <a href='create_session.php'>Create a new session</a>";
?>
