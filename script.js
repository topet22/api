$(document).ready(function(){
	$("#save").click(function(){
		var lname=$("#lname").get(0).value;
		var fname=$("#fname").get(0).value;
		$.post("http://www.localhost/api/public/postName",
				JSON.stringify({
				lname: lname,
				fname: fname
				}),
			function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
		});
	});
$("#display").click(function(){
	$.post("http://localhost/api/public/postPrint",
	function(data, status){
		var json=JSON.parse(data);
		var row="";
		for(var i=0;i<json.data.length;i++){

		row=row+"<tr><td>"+json.data[i].lname+"</td><td>"+json.data[i].fname+"</td></tr>";

			}
			$("#data").get(0).innerHTML=row;
		});
	});	
$("#search").click(function(){
	id=prompt("Enter Name ID");
//endpoint
	$.post("http://localhost/api/public/searchName",
	JSON.stringify(
//payload
					  {
					    id:id
					  }
				  ),
function(data, status){
//result
var json=JSON.parse(data);
$("#fname").get(0).value=json.data[0].fname;
$("#lname").get(0).value=json.data[0].lname;
console.log(json);

});
});
$("#update").click(function(){
	var fname=$("#fname").get(0).value;
	var lname=$("#lname").get(0).value;
	$.post("http://localhost/api/public/updateName",
	JSON.stringify({
	id:id,
	lname:lname,
	fname:fname
	}),
function(data, status){
alert("Data: " + data + "\nStatus: " + status);

});
});
$("#delete").click(function(){
	$.post("http://localhost/api/public/deleteName",
	JSON.stringify({
	id:id
	}),
	function(data, status){

	alert("Data: " + data + "\nStatus: " + status);

	});
	});

    $('#password, #confirm_password').on('keyup', function () {
		$('#butsave').prop('disabled',true);
		if (($('#password').val() == $('#confirm_password').val()) && $('#password').val() != "") {
		  $('#message').html('Matching').css('color', 'green');
		  $('#butsave').prop('disabled',false);
		  
		} else 
		  $('#message').html('Not Matching').css('color', 'red');		  
	  });

      $("#butsave").click(function(){
		var name=$("#name").get(0).value;
		var username=$("#username").get(0).value;
        var password=$("#password").get(0).value;
		$.post("http://www.localhost/api/public/userreg",
				JSON.stringify({
				name: name,
				username: username,
                password: password
				}),
			function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
		});
	});
	
});

function checkUsername() { //Register JS
    
	jQuery.ajax({
	url: "php/usernamevalidation.php",
	data:'username='+$("#username").val(),
	type: "POST",
	success:function(data){
		$("#check-username").html(data);
	},
	error:function (){}
	});
}