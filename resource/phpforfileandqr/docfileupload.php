<?php

include('phpqrcode/qrlib.php');
    $servername = "localhost";
	$username = "root";
	$password = "";
	$db="dms";
	$conn = mysqli_connect($servername, $username, $password,$db);

	/* Get the name of the uploaded file */
	$document_TITLE = $_POST['document_TITLE'];
	$filename = $_FILES['document_FILE']['name'];

	
	
	$true = 1;
	$false = 0;

	/* Choose where to save the uploaded file */
    $path = "http:/api/uploads/";
    $location = "../../uploads/";

	$allowTypes = array('pdf'); 



	  // File path config
	  
	  $temp = explode(".", $_FILES["document_FILE"]["name"]);
	  $newfilename = $document_TITLE . '.' . end($temp);
	  $targetFilePath = $path . $newfilename;
      $targetFilePath2 = $location . $newfilename;  
	  $fileType = pathinfo($targetFilePath2, PATHINFO_EXTENSION); 
	  
      $tempDir = "qrcode/"; 
      $codeContents = $targetFilePath; 
      $qrfileName = $document_TITLE.'.png'; 
      $pngAbsoluteFilePath = $tempDir.$qrfileName; 
      $urlRelativeFilePath = $tempDir.$qrfileName; 
      if (!file_exists($pngAbsoluteFilePath)) { 
          QRcode::png($codeContents, $pngAbsoluteFilePath); 
      }
	  
	  $qrfilepath = 'http://localhost/api/resource/phpforfileandqr/qrcode/'.$qrfileName;

	  $uploadStatus = 0; 
	  if(!empty($_FILES["document_FILE"]["name"])){ 
		// Allow certain file formats to upload 
		if(in_array($fileType, $allowTypes)){ 
			$uploadStatus = 1; 
		}
		else
		{ 
			$uploadStatus = 0; 
			echo $false;
		} 
		} 

		$qrfile = $document_TITLE.".png"; 

		$sql = "UPDATE documents set document_FILEPATH = '". $targetFilePath ."', document_FILE= '". $newfilename ."', doc_FILEPATH = '". $qrfilepath ."', qr_name = '". $qrfile ."' where document_TITLE='". $document_TITLE ."'";
		
        if($uploadStatus == 1){	
		if (mysqli_query($conn, $sql)) {
			move_uploaded_file($_FILES["document_FILE"]["tmp_name"], $targetFilePath2);
			echo $true;
		} 
		else {
			echo $false;
		}  
		mysqli_close($conn);
	} 

?>