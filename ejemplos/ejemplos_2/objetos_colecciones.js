/* Prueba de definicion de objetos */

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        console.log("mi nombre es: " + this.nombre + " y tengo " + this.edad + " años");
    }
}

// Crear una persona:
per1 = new Persona("Ana", 44);
console.log(per1);

// Definir un array de personas
personas = new Array();
personas[0] = per1;
personas[1] = new Persona("Juan", 23);
personas[2] = new Persona("Pedro", 53);

for (p of personas) {
    p.presentarse();
}

// Otra prueba con forEach:
console.log("Prueba con forEach");
personas.forEach(function(value) {
    console.log(value);
});


// Otro ejemplo de forEach calcular la edad media:
let suma = 0;
personas.forEach(media);
console.log("Edad media: " + (suma / personas.length));

function media(obj) {
    suma += obj.edad;
}


// Definir un mapa de objetos, con la clave el DNI
mapa = new Map();
//mapa.set([])

//Definir un set:
const letras = new Set();
letras.add("A");
letras.add("B");
letras.add("B");
letras.add("C");
console.log(letras);

// Definir un map:
mapa = new Map();
mapa.set("1", "a");
mapa.set("2", "b");
console.log(mapa);

const mapa2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(mapa2);