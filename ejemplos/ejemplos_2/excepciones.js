/* Ejemplo función recursiva */

class ZeroDivisionError extends Error {

    constructor(...params){
        super(params)
        this.name = 'ZeroDivisionError'
    }
}

class ColeccionError extends Error {

    constructor(...params){
        super(params)
        this.name = 'ColeccionError'
    }
}

function division(a,b){
    if (b == 0){
        throw new ZeroDivisionError('El denominador es cero: infinito')        
    } else 
        return a / b
}

function fact2(n){
    if (n == 1)
        return 1
    else
        return n * fact2(n-1)
}
function fact(n){
    return n * fact(n)
}
function main(){
    console.log(fact2(100))
    console.log(division(12,10))
    eval('m = new Map(')
    //throw new Error('error')
}

function crearColeccion(cadena){
    try {
        col = eval(cadena)
        return col

    } catch (err){
        if (err instanceof SyntaxError)
            throw new ColeccionError('Error al crear la coleccion: '+cadena)
        else 
            // Relanzar la misma excepción
            throw err

    } finally {
        console.log('Salta finally de crear coleccion')
    }
}

try {
    col = crearColeccion('new Map(');
    console.log(typeof col)
} catch (err){
    if (err instanceof ZeroDivisionError)
        console.log('Salta zero')

    else if (err instanceof RangeError)
        console.log('Salta Range')

    else if (err instanceof SyntaxError)
        console.log('Salta syntax')

    else if (err instanceof ColeccionError)
        console.log('Salta Col:'+err.message)

    else
        console.log('otro tipo: '+err.name+" "+err.message)
} finally {
    console.log('Se ha ejecutado finally')
}
