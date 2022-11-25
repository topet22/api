<?php  
session_start();
include "../db_conn.php";

if (isset($_POST['email']) && isset($_POST['password']) && isset($_POST['role'])) {

	function test_input($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}

	$email = test_input($_POST['email']);
	$password = test_input($_POST['password']);
	$role = test_input($_POST['role']);

	if (empty($email)) {
		header("Location: ../index.php?error=email is Required");
	}else if (empty($password)) {
		header("Location: ../index.php?error=Password is Required");
	}else {

		// Hashing the password
		$password = md5($password);
        
        $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
        $result = mysqli_query($conn, $sql);

        if (mysqli_num_rows($result) === 1) {
        	// the user name must be unique
        	$row = mysqli_fetch_assoc($result);
        	if ($row['password'] === $password && $row['role'] == $role) {
        		$_SESSION['name'] = $row['name'];
        		$_SESSION['id'] = $row['id'];
        		$_SESSION['role'] = $row['role'];
        		$_SESSION['email'] = $row['email'];

        		header("Location: ../home.php");

        	}else {
        		header("Location: ../index.php?error=Incorect email or password");
        	}
        }else {
        	header("Location: ../index.php?error=Incorect email or password");
        }

	}
	
}else {
	header("Location: ../index.php");
}