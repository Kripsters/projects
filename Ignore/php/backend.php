<!DOCTYPE html>
<html>
<head>
	<title>Chat Room</title>
</head>
<body>
	<h1>Čatiņš</h1 id="haha">
	
	<?php

		// Define a file to store messages
		$file = "messages.json";
		
		// Check if user has submitted a message
		if(isset($_POST['message'])) {
			// Get the message and user name from form input
			$message = $_POST['message'];
			$username = $_POST['username'];
			
			// Open the file and decode the JSON data
			$data = file_get_contents($file);
			$messages = json_decode($data, true);
			
			// Add the new message to the array
			$timestamp = date("Y-m-d H:i:s");
			$messages[] = array("timestamp" => $timestamp, "username" => $username, "message" => $message);
			
			// Encode the data as JSON and write it back to the file
			$data = json_encode($messages, JSON_PRETTY_PRINT);
			file_put_contents($file, $data);
		}
        
		// Display the messages
		if(file_exists($file)) {
			$data = file_get_contents($file);
			$messages = json_decode($data, true);
			foreach($messages as $message) {
				echo "[" . $message["timestamp"] . "] " . $message["username"] . ": " . $message["message"] . "<br>";
			}
		}
	?>
	
	<form method="post">
		<label for="username">Username:</label>
		<input type="text" name="username" id="username" required>
		<br>
		<label for="message">Message:</label>
		<input type="text" name="message" id="message" required>
		<br>
		<input type="submit" value="Send">
	</form>
</body>
</html>
