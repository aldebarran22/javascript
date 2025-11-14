/* Peticiones fetch */

function solicitarTexto() {
  let nombreFichero;
  let combo = document.getElementById("selector");
  let capa = document.getElementById("contenidoTexto");

  // Seleccionar el nombre del fichero
  nombreFichero = combo.value;

  /*
    fetch(nombreFichero)
    .then((response) => response.text())
    .then((text) => { 
        capa.innerHTML = text;
    })   
    .catch(err => {
        alert('Se ha producido el siguiente error: '+err);
    })*/

  // Pasando las cabeceras para indicar la codificación: UTF-8
  fetch(nombreFichero, {
    headers: { "Content-Type": "text/plain;charset:iso-8859-1" },
  })
    .then((response) => response.text())
    .then((text) => {
      capa.innerHTML = text;
    })
    .catch((err) => {
      alert("Se ha producido el siguiente error: " + err);
    });
}
