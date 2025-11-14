/* Ejemplo de funciones autoejecutables */

// Clásica
(function (){
    console.log('Versión clásica')
})();

// La Crockford
((function (){
    console.log('Versión Crockford')
})());

// Unaria
+function(){
    console.log('Unaria')
}();

// Facebook
!function(){
    console.log('Facebook')
}();

console.log('Ejemplo de funciones autoejecutables');