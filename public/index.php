<?php
header("Access-Control-Allow-Origin: *");
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../src/vendor/autoload.php';
$app = new \Slim\App;
//endpoint get greeting
$app->get('/getName/{fname}/{lname}', function (Request $request, Response

$response, array $args) {
$name = $args['fname']." ".$args['lname'];
$response->getBody()->write("Hello, $name");
return $response;

});
//endpoint post greeting
$app->post('/postName', function (Request $request, Response $response, array $args)
{
$data=json_decode($request->getBody());
$fname =$data->fname ;
$lname =$data->lname ;
//Database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo";
try {

$conn = new PDO("mysql:host=$servername;dbname=$dbname",

$username, $password);

// set the PDO error mode to exception
$conn->setAttribute(PDO::ATTR_ERRMODE,

PDO::ERRMODE_EXCEPTION);

$sql = "INSERT INTO names (fname, lname) VALUES ('". $fname ."','". $lname ."')";
// use exec() because no results are returned
$conn->exec($sql);
$response->getBody()->write(json_encode(array("status"=>"success","data"=>null)));

} catch(PDOException $e){
$response->getBody()->write(json_encode(array("status"=>"error",
"message"=>$e->getMessage())));
}
$conn = null;
return $response;
}); 

//endpoint user registration
$app->post('/userreg', function (Request $request, Response $response, array $args)
{
    $data=json_decode($request->getBody());
    $name =$data->name ;
    $uname =$data->username ;
    $pword = $data->password ;
    //Database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dms";
    try {
    
    $conn = new PDO("mysql:host=$servername;dbname=$dbname",
    
    $username, $password);
    
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE,
    
    PDO::ERRMODE_EXCEPTION);
    
    $sql = "INSERT INTO user_account (uname, username, passkey)
    VALUES ('". $name ."','". $uname ."','". $pword ."')";
    // use exec() because no results are returned
    $conn->exec($sql);
    $response->getBody()->write(json_encode(array("status"=>"success","data"=>null)));
    
    } catch(PDOException $e){
    $response->getBody()->write(json_encode(array("status"=>"error",
    "message"=>$e->getMessage())));
    }
    $conn = null;
});

//endpoint post print
$app->post('/postPrint', function (Request $request, Response $response, array $args) {
//Database

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM names";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
$data=array();
while($row = $result->fetch_assoc()) {
array_push($data,array("fname"=>$row["fname"]

,"lname"=>$row["lname"]));
}
$data_body=array("status"=>"success","data"=>$data);
$response->getBody()->write(json_encode($data_body));
} else {
$response->getBody()->write(array("status"=>"success","data"=>null));
}
$conn->close();
return $response;
});

//endpoint search student
$app->post('/searchName', function (Request $request, Response $response, array
$args) {

$data=json_decode($request->getBody());
$id =$data->id;
//Database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM names where id='". $id ."'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
$data=array();
while($row = $result->fetch_assoc()) {
array_push($data,array("id"=>$row["id"],"fname"=>$row["fname"] ,"lname"=>$row["lname"]));

}
$data_body=array("status"=>"success","data"=>$data);
$response->getBody()->write(json_encode($data_body));
} else {

$response->getBody()->write(array("status"=>"success","data"=>null));
}
$conn->close();

return $response;
});
//endpoint update student
$app->post('/updateName', function (Request $request, Response $response, array
$args) {
$data=json_decode($request->getBody());
$id =$data->id ;
$fname =$data->fname ;
$lname =$data->lname ;
//Database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo";
try {
$conn = new

PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

// set the PDO error mode to exception
$conn->setAttribute(PDO::ATTR_ERRMODE,

PDO::ERRMODE_EXCEPTION);

$sql = "UPDATE names set fname='". $fname ."', lname='".

$lname ."' where id='". $id ."'";

// use exec() because no results are returned
$conn->exec($sql);
$response->getBody()->write(json_encode(array("status"=>"success","data"=>null)));
} catch(PDOException $e){
$response->getBody()->write(json_encode(array("status"=>"error","message"=>$e->getMessage())));
}
$conn = null;

return $response;
});
//endpoint delete student
$app->post('/deleteName', function (Request $request, Response $response, array
$args) {

$data=json_decode($request->getBody());
$id =$data->id;
//Database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "demo";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "DELETE FROM names where id='". $id ."'";
if ($conn->query($sql) === TRUE) {
$response->getBody()->write(json_encode(array("status"=>"success","data"=>null)));

}
$conn->close();

return $response;
});
$app->run();
?>