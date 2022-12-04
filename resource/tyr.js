$(document).ready(function() { 

    $(document).on('submit', '#add', function(event)
      {
        event.preventDefault();
        var document_TITLE=$("#document_TITLE").get(0).value;
		var document_TYPE=$("#document_TYPE").get(0).value;
		var document_ORIGIN=$("#document_ORIGIN").get(0).value;
		var date_received=$("#date_received").get(0).value;
		var document_DESTINATION=$("#document_DESTINATION").get(0).value;
		var tags=$("#tags").get(0).value;
        var extension = $('#document_FILE').val();

        $.post("../public/fileupload",
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

        $.ajax(
            {
            url:"http://localhost/api/resource/phpforfileandqr/docfileupload.php",
            method:'POST',
            data:new FormData(this),
            contentType:false,
            processData:false,
            success:function(data)
            {
                if(data == 1) 
                { 
                    alert("File Successfully Uploaded");
                    window.location.replace("dashboard.html");
                } 
                else { 
                    alert("Error!");

            }
            }
        }
        );

      });

    $(document).on('submit', '#update', function(event){
        var document_ID=$("#document_ID").get(0).value;
        var document_TITLE=$("#document_TITLE").get(0).value;
		var document_TYPE=$("#document_TYPE").get(0).value;
		var document_ORIGIN=$("#document_ORIGIN").get(0).value;
		var date_received=$("#date_received").get(0).value;
		var document_DESTINATION=$("#document_DESTINATION").get(0).value;
		var tags=$("#tags").get(0).value;
        var extension = $('#document_FILE').val();

        $.ajax(
            {
            url:"http://api/resource/phpforfileandqr/updatedocfileupload.php",
            method:'POST',
            data:new FormData(this),
            contentType:false,
            processData:false,
            success:function(data)
            {
                if(data == 1) 
                { 
                    alert("File Successfully Updated");
                    window.location.replace("dashboard.html");
                } 
                else { 
                    alert("Error!");
                }
            }
            }
        );

        $.post("../public/updatefileupload",
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

    $("#search").click(function(){
        document_ID=prompt("Enter Document ID");
        //endpoint
        $.post("../public/searchfileupload",
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
    
    $("#delete").click(function(){
        $.post("../public/deletefileupload",
        JSON.stringify({
        document_ID:document_ID
        }),
        function(data, status){
    
        alert("Data: " + data + "\nStatus: " + status);
        });
    });
});