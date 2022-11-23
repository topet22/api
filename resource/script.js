$(document).ready(function(){

    $("#login").click(function(){
		var uname=$("uname").get(0).value;
		var passkey=$("passkey").get(0).value;
		
		$.post("http://www.localhost/api/public/loginUser",
				JSON.stringify({
				uname: uname,
				passkey: passkey
				}),
			function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
		});
	});


    //CREATE FILE UPLOAD
    $("#save").click(function(){
		var document_TITLE=$("#document_TITLE").get(0).value;
		var document_TYPE=$("#document_TYPE").get(0).value;
		var document_ORIGIN=$("#document_ORIGIN").get(0).value;
		var date_received=$("#date_received").get(0).value;
		var document_DESTINATION=$("#document_DESTINATION").get(0).value;
		var tags=$("#tags").get(0).value;
		
		$.post("http://www.localhost/api/public/fileupload",
				JSON.stringify({
				document_TITLE: document_TITLE,
				document_TYPE: document_TYPE,
				document_ORIGIN: document_ORIGIN,
				date_received: date_received,
				document_DESTINATION: document_DESTINATION,
				tags: tags
				}),
			function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
		});
	});

    //Update File Upload
    $("#update").click(function(){
        var document_ID=$("#document_ID").get(0).value;
		var document_TITLE=$("#document_TITLE").get(0).value;
		var document_TYPE=$("#document_TYPE").get(0).value;
		var document_ORIGIN=$("#document_ORIGIN").get(0).value;
		var date_received=$("#date_received").get(0).value;
		var document_DESTINATION=$("#document_DESTINATION").get(0).value;
		var tags=$("#tags").get(0).value;
		
		$.post("http://www.localhost/api/public/updatefileupload",
				JSON.stringify({
                document_ID: document_ID,
                document_TITLE: document_TITLE,
				document_TYPE: document_TYPE,
				document_ORIGIN: document_ORIGIN,
				date_received: date_received,
				document_DESTINATION: document_DESTINATION,
				tags: tags
				}),
			function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
		});
	});

    //Search File Upload

   $("#search").click(function(){
        document_ID=prompt("Enter Name ID");
    //endpoint
        $.post("http://localhost/api/public/searchfileupload",
        JSON.stringify(
    //payload
                          {
                            document_ID:document_ID
                          }
                      ),
    function(data, status){
    //result
    var json=JSON.parse(data);
	$("#document_ID").get(0).value=json.data[0].document_ID;
    $("#document_TITLE").get(0).value=json.data[0].document_TITLE;
    $("#document_TYPE").get(0).value=json.data[0].document_TYPE;
    $("#document_ORIGIN").get(0).value=json.data[0].document_ORIGIN;
    $("#date_received").get(0).value=json.data[0].date_received;
    $("#document_DESTINATION").get(0).value=json.data[0].document_DESTINATION;
    $("#tags").get(0).value=json.data[0].tags;    
    console.log(json); 
    });
    });

    //Delete File Uploads
    $("#delete").click(function(){
        $.post("http://localhost/api/public/deletefileupload",
        JSON.stringify({
        document_ID:document_ID
        }),
        function(data, status){
    
        alert("Data: " + data + "\nStatus: " + status);
    
        });
        });

		$("#display").click(function(){

			$.post("http://localhost/api/public/displaydata",
			function(data, status){
			var json=JSON.parse(data);
			var row="";
			for(var i=0;i<json.data.length;i++){
			
			row=row+"<tr><td>"+json.data[i].document_ID+"</td><td>"+json.data[i].document_TITLE+"</td><td>"+json.data[i].document_TYPE+"</td><td>"+json.data[i].document_ORIGIN+"</td><td>"+json.data[i].date_received+"</td><td>"+json.data[i].document_DESTINATION+"</td><td>"+json.data[i].tags+"</td><td><a href = "+json.data[i].document_FILE+">"+json.data[i].document_FILE+"</a></td><td>"+
			"<button id="+json.data[i].document_ID+" class=gotoupdate>Edit</button>"+
			"</td><td>"+
			"<button id="+json.data[i].document_ID+" class=delete>Delete</button></td></tr>"
			
			}
			$("#data").get(0).innerHTML=row;
			});
			});

			$("#gotoadd").click(function(){
				window.location.href = "AddDocument.html";
			});

			$("#gotoupdate").click(function(){
				window.location.href = "UpdateDocument.html";
			});
});

