$(document).ready(function() {    
    //Display DataTable
    $.post("../public/displaydata",
    function(data, status){
    var json=JSON.parse(data);
    var row="";
    for(var i=0;i<json.data.length;i++){

        row=row+"<tr><td>"+json.data[i].document_ID+"</td><td>"+json.data[i].document_TITLE+"</td><td>"+json.data[i].document_TYPE+"</td><td>"+json.data[i].document_ORIGIN+"</td><td>"+json.data[i].date_received+"</td><td>"+json.data[i].document_DESTINATION+"</td><td>"+json.data[i].tags+"</td><td><img src = "+json.data[i].doc_FILEPATH+"></td></tr>";
    }
    
    $("#data").get(0).innerHTML=row;
     });
     
 });