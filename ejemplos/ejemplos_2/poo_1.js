// Prueba de definición de clase
// Ejemplo con metodos get/set

var Gato = function(nombre) {
    var alias = nombre;

    this.getAlias = function() {
        return alias;
    }

    this.setAlias = function(a) {
        alias = a;
    }
}

g1 = new Gato('raton');
console.log(g1.getAlias());
g1.setAlias('Pepe');
console.log(g1.getAlias());
console.log(g1);