<?php
include('phpqrcode/qrlib.php');
$servername = "localhost";
$username = "root";
$password = "";
$db="dms";
$conn = mysqli_connect($servername, $username, $password,$db);

/* Get the name of the uploaded file */
$document_ID = $_POST['document_ID'];
$document_TITLE = $_POST['document_TITLE'];
$filename = $_FILES['document_FILE']['name'];





$true = 1;
$false = 0;

/* Choose where to save the uploaded file */
$path = "http:/api/uploads/";
$location = "../../uploads/";

$allowTypes = array('pdf'); 



  // File path config
  
  $temp = explode(".", $_FILES['document_FILE']['name']);
  $newfilename = $document_TITLE . '.' . end($temp);
  $targetFilePath = $path . $newfilename;
  $targetFilePath2 = $location . $newfilename;  
  $fileType = pathinfo($targetFilePath2, PATHINFO_EXTENSION); 

  $sql2 = "SELECT * FROM documents where document_ID='". $document_ID ."'";
  $filesql = mysqli_query($conn,$sql2);

  while($row = mysqli_fetch_array($filesql)){
    $filenametodelete = $row["document_FILE"];
    $filetodelete = "../../uploads/" . $filenametodelete;
    unlink($filetodelete);
    $qrtodelete = $row["qr_name"];
    $qrfiletodelete = "qrcode/" . $qrtodelete;
    unlink($qrfiletodelete);
  }

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