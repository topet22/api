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
		var document_TITLE=$("document_TITLE").get(0).value;
		var document_TYPE=$("document_TYPE").get(0).value;
		var document_ORIGIN=$("document_ORIGIN").get(0).value;
		var date_received=$("date_received").get(0).value;
		var document_DESTINATION=$("document_DESTINATION").get(0).value;
		var tags=$("tags").get(0).value;
		
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
        var document_ID=$("document_ID").get(0).value;
		var document_TITLE=$("document_TITLE").get(0).value;
		var document_TYPE=$("document_TYPE").get(0).value;
		var document_ORIGIN=$("document_ORIGIN").get(0).value;
		var date_received=$("date_received").get(0).value;
		var document_DESTINATION=$("document_DESTINATION").get(0).value;
		var tags=$("tags").get(0).value;
		
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
    $("document_ID").get(0).value=json.data[0].fname;
    $("document_TITLE").get(0).value=json.data[0].fname;
    $("document_TYPE").get(0).value=json.data[0].fname;
    $("document_ORIGIN").get(0).value=json.data[0].fname;
    $("date_received").get(0).value=json.data[0].fname;
    $("document_DESTINATION").get(0).value=json.data[0].fname;
    $("tags").get(0).value=json.data[0].fname;    
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
});

