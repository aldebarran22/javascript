// Ejemplo de excepcion personalizada 
// Heredamos de la clase Error

class MiError extends Error {
    constructor(nombre = "", ...params) {
        // Pasar los parametros a la clase Error (la padre)        
        super(...params);

        this.name = nombre;
        this.fecha = new Date();
    }
}

try {
    throw new MiError('MiError', 'Este es un error de prueba');

} catch (e) {
    console.log('name: ', e.name);
    console.log('message: ', e.message);
    console.log('fecha: ', e.fecha);
}