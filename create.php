<?php

		// Define a file to store messages
        $file = "atbildes.json";
        
			$jaut = $_POST['jaut'];
            $atb1 = $_POST['atb1'];
            $atb2 = $_POST['atb2'];
            $atb3 = $_POST['atb3'];
            $atb4 = $_POST['atb4'];
			
			// Open the file and decode the JSON data
			$data = file_get_contents($file);
			$atbildes = json_decode($data, true);
			
			// Add the new message to the array
			$atbildes[] = array("jaut" => $jaut, "atb1" => $atb1, "atb2" => $atb2, "atb3" => $atb3, "atb4" => $atb4);
			
			// Encode the data as JSON and write it back to the file
			$data = json_encode($atbildes, JSON_PRETTY_PRINT);
			file_put_contents($file, $data);
	?>