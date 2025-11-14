/* Definir variables dentro de un ámbito */

var global1 = 0;
let global2 = 1;

function f1(){
    console.log("Vars globales: "+global1 + " " + global2);
}

function f2(){
    var local1 = 100;
    let local2 = 200;
    // OJO SOLO EXISTE DENTRO DE LA FUNCION
}

for (var i = 0; i < 5 ; i++)
    console.log("i="+i);
console.log('i fuera del bucle: ' + i);

for (let j = 0; j < 5 ; j++)
    console.log("j="+j);
//console.log('j fuera del bucle: ' + j);  OJO YA NO EXISTE!

f1();
f2();
console.log('GLOBAL1: '+global1+ " global2: " + global2);
//console.log('local1: '+local1+ " local2: " + local2); NO tenemos acceso a vars locales de una funcion