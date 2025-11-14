/* Ejemplos de funciones */

// Función anónima
var minimo = function(a,b) {
    return (a < b) ? a : b;
}

// Función arrow
const maximo = (a,b) => {
    return (a > b) ? a : b;
}

// Funciones con parámetros opcionales:
var calcularIVA = function(valor, iva=0.21){
    return valor * iva;
}

const calcularIVA2 = (valor, iva=0.21) => {
    return valor * iva;
}

var imprimir = function(...args){
    console.log(args instanceof Array);
    for (x of args) {
        console.log(x);
    }
}

const imprimir2 = (etiqueta, ...args) => {
    console.log('etiqueta:'+etiqueta);
    for (x of args) {
        console.log(x);
    }
}

const imprimir3 = (etiqueta, valor=0, ...args) => {
    console.log('etiqueta:'+etiqueta);
    console.log('valor: '+valor);
    for (x of args) {
        console.log(x);
    }
}

// Definir una función que opcionalmente pueda generar ol / ul (por defecto ol)
// de todos las cadenas que le pasemos
// La función devuelve la lista de HTML
const lista = (etiqueta, cadenas) => {
    let html = `<${etiqueta}>`;
    cadenas.forEach( (value, i) => {
        html += `<li value='${i}'>${value}</li>`;
    });
    html += `</${etiqueta}>`;
    return html;
}
const OL = (...cadenas) => {
   return lista('ol', cadenas);
}
const UL = (...cadenas) => {
    return lista('ul', cadenas);
}

// Funciones anidadas:
const lista2 = (etiqueta, ...cadenas) => {
    let html = "";

    function inicio(etiqueta){ html = `<${etiqueta}>`; }
    function fin(etiqueta){ html += `</${etiqueta}>`; }

    // Código principal de lista2:
    inicio(etiqueta);
    cadenas.forEach( (value, i) => {
        html += `<li value='${i}'>${value}</li>`;
    });
    fin(etiqueta);    
    return html;
}

console.log(lista2('ol','Alberto','Sonia','Sandra','Jose'));
console.log(OL('Alberto','Sonia','Sandra','Jose'));
console.log(UL('Alberto','Sonia','Sandra','Jose'));

console.log(minimo(12, 45));
console.log(typeof minimo);
console.log(maximo(12, 45));
console.log(typeof maximo);
console.log(calcularIVA(100));
console.log(calcularIVA(100, 0.04));
console.log(calcularIVA2(100));
console.log(calcularIVA2(100, 0.04));
imprimir(1,3,4,5,6,'hola');
imprimir2(1,3,4,5,6,'hola');
imprimir2('hola');
imprimir3('hola');
imprimir3(1,2,3,4,5);
