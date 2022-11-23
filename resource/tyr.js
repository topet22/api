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

        $.ajax(
            {
            url:"http://www.localhost/api/public/docfileupload",
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

});