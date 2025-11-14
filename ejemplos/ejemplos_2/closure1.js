/* Pruebas con closures */

function say123(){
    var num=123;
    var sayAlert = function(){console.log(num)}
    num++
    return sayAlert
}


function construyeLista(lista) { 
    var resultado = []; 
    for (var i = 0; i < lista.length; i++) { 
        var item = 'item' + lista[i]; 
        resultado.push( function() {console.log(item + ' ' + lista[i])} ); 
    } 
    return resultado; 
} 
    
function testLista() { 
    var fnlista = construyeLista([1,2,3]); 
    for (var j = 0; j < fnlista.length; j++){ 
        fnlista[j](); 
    } 
} 

// Capturar la referencia a la función
var sayNum = say123()

// Ejecutar la función
sayNum() 

// Mostrar el código:
console.log(sayNum.toString())

testLista()

