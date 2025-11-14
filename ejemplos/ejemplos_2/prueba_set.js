let c1 = new Set([1, 2, 3, 4, 5, 6]);
let c2 = new Set([5, 6, 7, 8, 9]);

let union = new Set();
let inter = new Set();

// Calculo de la union:
c1.forEach((v) => {
    if (!union.has(v)) union.add(v)
});

c2.forEach((v) => {
    if (!union.has(v)) union.add(v)
});

console.log("union: ");
for (x of union)
    console.log(x);


// Calculo de la intersection:    
c1.forEach((v) => {
    if (!inter.has(v) && c2.has(v)) inter.add(v)
});
console.log("Inter: ");
for (x of inter)
    console.log(x);