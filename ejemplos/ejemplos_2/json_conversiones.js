/*
Conversiones entre objetos JSON a String
Funciones: 
JSON.parse() de String a objeto JSON
JSON.stringify() de objeto JSON a String
*/

// Definir el objeto en JSON:
let obj = {nombre:"Ana",edad:48}
console.log('Nombre: '+obj.nombre+", edad: "+obj.edad+" Tipo:"+typeof obj)

// Convertir el objeto JSON a String:
let cad = JSON.stringify(obj)
console.log('Cad: '+cad + " tipo:"+typeof cad)

// Convertir el String a un objeto JSON:
let obj2 = JSON.parse(cad);
console.log('Obj: '+obj2+ " tipo:"+typeof obj2)