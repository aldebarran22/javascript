addEventListener("load", () => {
  // Fuente donde está la imagen:
  let source1 = document.getElementById("image");
  source1.addEventListener("dragstart", (e) => {
    let code = '<img src="' + source1.getAttribute("src") + '">';
    e.dataTransfer.setData("Text", code);
  });

  // El destino:
  let drop = document.getElementById("dropbox");
  // Eliminar el comportamiento por defecto:
  drop.addEventListener("dragenter", (e) => {
    e.preventDefault();
  });
  // Eliminar el comportamiento por defecto:
  drop.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  drop.addEventListener("drop", (e) => {
    e.preventDefault();
    drop.innerHTML = e.dataTransfer.getData("Text");
    source1.parentNode.removeChild(source1);
  });
});
