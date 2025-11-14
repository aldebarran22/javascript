/* Control de flujo */

let num = 100;
if (num > 0){
    let v = 4;

} 

//console.log(v);

num = 9;
switch (num){
    case 1:
        console.log("lunes");

    case 2:
        console.log("martes"); 
        break;

    case 3:
        console.log("miercoles");
        break;

    case 4:
    case 5:
        console.log("J / V");
        break;
    default:
        console.log('fin de semana');
}

numeros = [1,2,4,5,6,7,8];
console.log(typeof(numeros)+" " + (numeros instanceof Array));

for (let i = 0; i < numeros.length; i++)
    console.log(numeros[i]);

// Itera por los indices
for (let i in numeros)
    console.log(numeros[i]);

// Itera por los items
for (let item of numeros)
    console.log(item);


console.debug('Depuración');
console.info('mensaje de informacion');
console.warn('Mensaje de aviso');
console.error("Mensaje de error");

let obj = {nombre:"Pepe",edad:45,dir:{calle:"Boltaña",numero:34}};
console.dir(obj);
console.log(obj);
console.dir(numeros);
console.log(console.timeStamp());
console.table(numeros);