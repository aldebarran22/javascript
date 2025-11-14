// Definir objetos:
const obj = { nombre: "Jose", edad: 22 };
console.log(obj);

// Desestructuración
const { nombre, edad } = obj;
console.log(nombre + " " + edad);
console.log(obj);

// Copiar un objeto
const { ...copia } = obj;
obj.edad++;
copia.edad--;
console.log(copia);
console.log(obj);

// Recorrer array de objetos
const users = [
  {
    nombre: "Juan",
    edad: 33,
  },
  {
    nombre: "Ana",
    edad: 31,
  },
  {
    nombre: "Pepe",
    edad: 56,
  },
];

console.log("\nArray:");
for (item of users) {
  console.log(item);
}

// Borrar una propiedad:
const obj2 = { nombre: "Jose", edad: 22, tno: 600565644 };
console.log(obj2);
delete obj2.tno; 
console.log(obj2);

// Agrupar objetos:
const user = { login: "admin", pass: "1234" };
const contacto = { tno: 912202030, movil: 607061050 };
const todo = {
  user,
  contacto,
};
console.log(todo);

// Template String:
const valor = 10;
console.log(`Valor = ${valor}`);
console.log(`el login: ${todo.user.login}`);

// Arrays:
const datos = [valor, todo];
for (item of datos) {
  console.log(item);
}

// Filtros en Arrays:
const numeros = [1, 4, 5, 3, 2, 9];
const may_3 = numeros.filter(function (n) {
  return n > 3;
});
console.log(may_3);

// Idem con funciones arrow:
const may_3_bis = numeros.filter((n) => n > 3);
console.log(may_3_bis);

//Destructuring Arrays
const array = ["hola", 234, true, "mas"];
const [saludo, , , cadena] = array;
console.log(saludo, cadena);

// Iteradores:
console.log("iteradores:");
const tecnologias = ["Vue.js", "JavaScript", "Node.js", "HTML", "CSS", "Git"];
const arr1 = tecnologias.map(function (tech) {
  return tech;
});
console.log(tecnologias);
console.log(arr1);

const numeros_2 = [1, 4, 5, 6, 7, 3];
const n_2 = numeros_2.map((n) => n + 1);
console.log(numeros_2);
console.log(n_2);
// Copia con forEach
const copia2 = [];
numeros_2.forEach((n) => copia2.push(n));
console.log("la copia " + copia2);

// Funciones:
function sumar(a = 10, b = 20) {
  return a + b;
}
console.log(sumar());
console.log(sumar(11));
console.log(sumar(11, 21));

const sumarFlecha = (a = 10, b = 20) => a + b;
console.log(sumarFlecha());
console.log(sumarFlecha(11));
console.log(sumarFlecha(11, 21));

const tecnologias2 = ["Vue.js", "JavaScript", "Node.js", "HTML", "CSS", "Git"];
const resul = tecnologias2.includes("JavaScript");
console.log(resul);
const resul2 = tecnologias2.includes("C++");
console.log(resul2);

const indice = tecnologias2.findIndex((tc) => tc === "JavaScript");
console.log(indice);

// Ojo, exactamente igual!
console.log(2 == "2");
console.log(2 === "2");

// Mas sobre arrays:
const nums = [1, 3, 4, 5, 6, 10, 11, 12];
console.log("some:" + nums.some((n) => n > 20));
console.log("find: " + nums.find((n) => n === 15));
console.log("find: " + nums.find((n) => n === 11));
// Son todos los valores del array > 10?
console.log("every: > 10 " + nums.every((n) => n > 10));
console.log("every: < 20 " + nums.every((n) => n < 20));

// Reducir array:
console.log("reduce: " + nums.reduce((total, numero) => numero + total, 0));

// Encadenamiento  opcional y settimeout
const alum = { nombre: "Gema" };
setTimeout(() => {
  alum.examen = { test: 10, teoria: 9 };
  console.log("Nota test in: " + alum.examen?.test);
}, 3000);
console.log("nota test out: " + alum.examen?.test);
