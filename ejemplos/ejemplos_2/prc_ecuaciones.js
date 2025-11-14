/* 
Ecuación 2 grado
a = 1, b = 5, c = 4 Tiene solución
a = 1, b = 2, c = 3 No tiene solución
*/

function ecuacion(a,b,c){

    let raiz = Math.pow(b,2) - 4*a*c;
    if (raiz < 0)
        return false;

    else {
        sol1 = (-b + Math.sqrt(raiz)) / (2*a);
        sol2 = (-b - Math.sqrt(raiz)) / (2*a);
        return {x1:sol1, x2:sol2};
    }
}

let a = 1;
let b = 5;
let c = 4;

sol = ecuacion(a,b,c);
console.log(sol);