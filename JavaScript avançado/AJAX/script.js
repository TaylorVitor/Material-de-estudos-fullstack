

/*

AJAX

asynchronous JavasCript and XMl

Ele é um conjunto de técnicas de desenvolvimento voltado para a web que permite que aplicações trabalhem de modo assíncrono,

*/


const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText)

        console.log(response[0])
    }
    
}

xhttp.open("GET","https://jsonplaceholder.typicode.com/photos", true)
xhttp.send()