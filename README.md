API Output

API Location : http://www.localhost/api/public
This API is used to store user account in the dms database

## 1. /userreg 
________________________________________
```
Request:
}
            "name"      : "Johny Bravo",
            "username"  : "JBravo",
            "password"  : "*BravoJohn69"
{           
```
________________________________________ 
```
Reponse:
{
            "status"    : "success",
            "data"      :  null
}
```
________________________________________   

## 2. /loginUser
This API is used to validate the end user during login
________________________________________ 
```
Request: 
}
        "uname"    : "JBravo",
        "passkey"  : "BravoJohn69"
}        
```        
________________________________________
```
    {
        "status"    : "success",
        "data"      :  null
    }
```
## 3./fileupload
This API is used to store the document details of a file in the dms database

```
Request
```
    {
        "document_TITLE"        : "2022November_SalesReport.xls",
        "document_TYPE"         : "xls",
        "document_ORIGIN"       : "Branch II",
        "date_received"         : "2022-11-10",
        "document_DESTINATION"  : "Main Branch",
        "tags"                  : "["sales report", "november", "2022", "Branch II", "Main Branch"]"
    }
```
Response
```
    {
        "status"    : "success",
        "data"      :  null
    }
```
## 4./docfileupload
This API is used to store the document file in the dms database

```
Request
```
    {
	            "Test1.pdf"	
    }
```
Response
```
    {
        "status"    : "success",
        "data"      :  null
    }
```
## 5. /displaydata
This API is used to display all document files stored in the dms database

```
Request
```
    {
       "document_ID": "1" 
    }
```
Response
```
    {
        "status"    : "success",
        "data"      :  null
    }
```
## 6. /searchfileupload
This API is used to search the document file in the dms database using ID

```
Request
```
    {
        "document_ID"   : "1"
    }
```
Response
```
    {
        "status"    : "success",
        "data"      :  null
    }
```
## 7. /deletefileupload
This API is used to delete the document file in the dms database

```
Request
```
    {
        "document_ID"   : "1"
    }
```
Response
```
    {
        "status"    : "success",
        "data"      :  null
    }
```
## 8. /updatefileupload
This API is used to update the document details of a file in the dms database

```
Request
```
    {
        "document_TITLE"        : "2022October_SalesReport.xls",
        "document_TYPE"         : "xls",
        "document_ORIGIN"       : "Branch II",
        "date_received"         : "2022-11-10",
        "document_DESTINATION"  : "Main Branch",
        "tags"                  : "["sales report", "October", "2022", "Branch II", "Main Branch"]"
    }
```
Response
```
    {
        "status"    : "success",
        "data"      :  null
    }
```
## 9. /updatedocfileupload
This API is used to update the document file in the dms database

```
Request
```
    {
        "test2.pdf"
    }
```
Response
```
    {
        "status"    : "success",
        "data"      :  null
    }
```

