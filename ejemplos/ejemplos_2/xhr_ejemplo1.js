/* Ejemplo del objeto XMLHttpRequest */

var XMLHttpRequest = require('xhr2');
var client = new XMLHttpRequest();

//const client = new XMLHttpRequest();

client.addEventListener('readystatechange', () => {
    const isDone = client.readyState === 4;
    const isOk = client.status === 200;

    if (isDone && isOk){
        console.log(client.responseText);
    }
});

client.open("GET", "ficheros/fichero1.txt");
client.send();