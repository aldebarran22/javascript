const client = new XMLHttpRequest();

client.addEventListener('readystatechange', () => {
    const isDone = client.readyState === 4;
    const isOk = client.status === 200;

    if (isDone && isOk){
        console.log(client.responseText);

    } else {
        let n = client.readyState;
        switch (n){
            case 0:
                console.log("UNSENT");
                break;

            case 1:
                console.log("OPENED");
                break;

            case 2:
                console.log("HEADERS_RECEIVED");
                break;

            case 3:
                console.log("LOADING");
                break;

            case 4:
                console.log("DONE");
                break;
        }
    }
});

client.open("GET", "./fichero1.txt");
client.send();