/* Ejemplo de closures */

function saludo(nombre){
    let mensaje = `Hola ${nombre}`
    let fSaludar = ()=>{
        console.log(mensaje)
    }
    return fSaludar
}

let fun = saludo('Juan')
fun()
console.log(typeof fun)
console.log(fun.toString())
let fun2 = saludo('Ana')
fun2()
fun()
