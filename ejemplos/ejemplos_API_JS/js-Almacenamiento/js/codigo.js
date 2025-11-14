addEventListener("load", () => {
  const obj = { producto: "portatil", precio: 350 };
  // Grabar datos en la sesion:
  sessionStorage.setItem("obj", JSON.stringify(obj));

  let boton = document.querySelector("#boton");
  boton.addEventListener("click", () => {
    let str = sessionStorage.getItem("obj");
    if (str != null) {
      console.log("obj: " + JSON.parse(str));
    }
  });
});
