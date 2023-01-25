
fetch('https://sheetdb.io/api/v1/ummoz9tikfle3')
  .then((response) => response.json())
  .then((data) => {
    
    console.log(data);

    if(data.length>0){
        var temp = ""
        data.forEach((u)=> {

            temp +="<td>" + u.Student_id + "</td>"
            temp +="<td>" + u.Firstname + "</td>"
            temp +="<td>" + u.Lastname + "</td></tr>"
        })
        document.getElementById("data").innerHTML = temp;
    }
} );

