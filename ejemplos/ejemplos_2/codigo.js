var numero = 34;
var cadena = "hola mundo";
var obj = {nombre:"Raul",edad:45};

console.log(obj);
console.log("tipo: " + typeof(obj))
console.log(numero + " tipo: " + typeof(numero));

var num1 = "77";
console.log(parseInt(num1) + 33);

var foo="5";
console.log(typeof parseInt ( foo ));   
console.log( typeof parseFloat ( foo ));
console.log( typeof ( foo - 0 ) );
console.log( typeof ( foo * 1 ) );
console.log( typeof ( foo / 1 ) );
console.log( typeof ( +foo ));
var n = 88;
console.log(typeof(n+""));
console.log(typeof(n+"8"));

var cad = "";
if (!cad)
    console.log("true");
else
    console.log("false");
