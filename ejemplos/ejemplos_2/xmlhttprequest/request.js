// XMLHttpRequest() en ES6 pero tenemos el API Fetch

const XMLHttpRequest = require('xhr2');

/*
function makeRequest(method, url) {
    return new XMLHttpRequest((resolve, reject) => {


        let request = new XMLHttpRequest()

        request.open(method, url)
        request.onload = resolve
        request.onerror = reject
        request.send()
    })
}

makeRequest('GET', 'request.txt')
    .then((event) => {
        console.log(event.target.response)
    })

.catch((err) => {
    throw new Error(err)
})*/