// Ejemplo de promesas con fetch:
// No sabemos si va a tardar mucho en ejecutar o va a devolver correctamente
// los datos.

const url = "http://jsonplaceholder.typicode.com/comments"

const consultarAPI = ()=>{
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((resul => {
        console.log(resul)
    }))
    .catch(err=>{
        console.log('ERROR',err)
    })
    .finally(()=>{
        console.log('Todo finalizado ...')
    })
}

consultarAPI()
