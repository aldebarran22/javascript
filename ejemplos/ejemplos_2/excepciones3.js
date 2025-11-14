// Ejemplo de excepcion personalizada 
// Heredamos de la clase Error

class CustomError extends Error {
    constructor(foo = 'bar', ...params) {
        // Pasa los argumentos restantes (incluidos los específicos del proveedor) al constructor padre
        super(...params)

        // Mantiene un seguimiento adecuado de la pila para el lugar donde se lanzó nuestro error (solo disponible en V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }

        this.name = 'CustomError'
            // Información de depuración personalizada
        this.foo = foo
        this.date = new Date()
    }
}

try {
    throw new CustomError('baz', 'bazMessage')
} catch (e) {
    console.error(e.name) // CustomError
    console.error(e.foo) // baz
    console.error(e.message) // bazMessage
    console.error(e.date);
    //console.error(e.stack) // stacktrace
}