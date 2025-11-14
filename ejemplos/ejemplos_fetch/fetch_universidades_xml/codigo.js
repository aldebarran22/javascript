var root = null;

addEventListener(
  "load",
  () => {
    let url = "./universidades2.xml";
    let req = new Request(url);
    // Cargar el fichero XML
    fetch(req, {
      headers: { "Content-Type": "text/plain;charset:utf-8" },
    })
      .then((response) => response.text())
      .then((texto) =>
        new DOMParser().parseFromString(texto, "application/xml")
      )
      .then((dom) => {
        root = dom.documentElement;
        console.log(root.nodeName);
        let carreras = root.getElementsByTagName("carrera");
        for (carrera of carreras) {
          console.log(carrera.firstChild.firstChild.nodeValue);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  false
);
