// Prueba de funciones con un numero indeterminado de parametros:

function pruebaParams(...params) {

    for (p of params) {
        console.log(p);
    }
}

pruebaParams(1, 2, 4, 'hola');