const url = "http://jsonplaceholder.typicode.com/comments"

const consultarAPI = async ()=>{
    try {
        // El valor de respuesta espera hasta que se realice la petición
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log(resultado)

    } catch (error){
        console.log('ERROR',err)

    } finally {
        console.log('Todo finalizado 2 ...')
    }
}

consultarAPI()