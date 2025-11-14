// Comparando variables

function menor(a,b){
    return (a < b) ? a : b;
}

let a = "2";
let b = 2;

console.log(a == b);
console.log(a === b);

console.log( (a % 2 == 0) ? "par" : "impar");
console.log( menor(8,6));

// Comprobar una prop. dentro de un objeto: in
let user = {login:"admin",pass:"1234"};

console.log(user.email)
console.log("login" in user);
console.log("email" in user);

if (user.email == undefined)
    console.log('no existe email')

let n = 234;
let n2 = new Number(88);
console.log(n instanceof Number);
console.log(n2 instanceof Number);
console.log(typeof(n));
console.log(typeof(n2));