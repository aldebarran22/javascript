function funcion(cadena) {

    try {
        if (cadena == null) throw "Cadena vacía";
        console.log('la cadena es: ', cadena);

    } catch (err) {
        console.log("ERROR: ", err);

    } finally {
        console.log('finally');

    }
}


function funcion2(cadena) {

    try {
        if (cadena == null) throw new Error("Cadena vacía");
        console.log('la cadena es: ', cadena);

    } catch (e) {
        console.log("ERROR: ", e.name, ' ', e.message);

    } finally {
        console.log('finally');

    }
}

try {
    throw new Error('¡Ups!')
} catch (e) {
    console.error(e.name + ': ' + e.message)
}

console.log('funcion:')
funcion(null);
funcion('hola');

console.log('funcion2:')
funcion2(null);
funcion2('hola');