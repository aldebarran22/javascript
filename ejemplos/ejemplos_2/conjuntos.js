/* Prueba con los conjuntos:  */

function interseccion(c1, c2){
    // Elementos comunes en ambos conjuntos
    resul = new Set();
    for (x of c1){
        if (c2.has(x)) resul.add(x)
    }
    return resul;
}

function union(c1, c2){
    // Todos los elementos sin repetidos:
    resul = new Set(c1);
    for (x of c2)
        resul.add(x)

    return resul
}

function printSet(c){
    c.forEach((value)=> console.log(value))
}

function testOperaciones(){
    c1 = new Set([1,3,4,5,6,7,1,1])
    printSet(c1)
    c2 = new Set([4,5,-6,-7,0,6,3,2,1])
    resul = interseccion(c1, c2)
    console.log("Intersección:")
    printSet(resul)

    resul2 = union(c1,c2)
    console.log("Union:")
    printSet(resul2)
}

function test(){
    c1 = new Set([6,1,1,2,4,4,5,1,2])
    for (x of c1)
        console.log(x)

    c1.forEach((value)=> console.log(value))
    console.log(c1.has(6))
}

function conversiones(){
    arr = [5,6,73,2,1,4]
    c1 = new Set(arr) // De array a set

    arr2 = Array.from(c1) // De set a Array
    printSet(arr2)
    console.log(arr2 instanceof Array)
}

//testOperaciones()
conversiones()