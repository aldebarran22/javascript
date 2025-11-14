// Ejemplo de promesas: representan la finalización de una funcion asíncrona.
// Se puede utilizar como alternativa a las funciones de encadenamiento.

let doSecond = () => {
    console.log('Los datos están disponibles ...');
}

console.log('Cargando ...');

let doFirst = new Promise((resolve, reject) => {
    setTimeout(() => {

        resolve()
    }, 2000)
})

doFirst.then(doSecond)