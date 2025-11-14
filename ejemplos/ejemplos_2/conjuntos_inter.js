// No hay operación nativa para los conjuntos:

// Se inicializan con un array:
let c1 = new Set(['a', 'b', 'c']);
let c2 = new Set(['b', 'c', 'd', 'e']);

console.log(c1);
console.log(c2);

let inter = new Set([...c1].filter(i => c2.has(i)));
console.log(inter);

// Otra forma:
var inter2 = new Set();
for (var x of c1)
    if (c2.has(x)) inter2.add(x);
console.log(inter2);