// Ejemplo de formatear JSON:

var cad = '{"menu":{"id":"fichero","valor":"Fichero","popup":{"menuitem":[{"id":"nuevo","value":"NuevoFichero"},{"id":"abrir","value":"AbrirFichero"},{"id":"salir","value":"Salirdelmenu"}]}}}';

console.log('Con eval()');
obj = eval("(" + cad + ")");
console.log(obj.menu.id);
console.log(obj.menu.valor);
col = obj.menu.popup.menuitem;
console.log(col.length + " elementos");
for (m of col) {
    console.log(m.id + " -> " + m.value);
}

console.log("Con JSON.parse()");
obj2 = JSON.parse(cad);
console.log(obj2.menu.id);
console.log(obj2.menu.valor);
col = obj2.menu.popup.menuitem;
console.log(col.length + " elementos");
for (m of col) {
    console.log(m.id + " -> " + m.value);
}