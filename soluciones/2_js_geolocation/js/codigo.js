addEventListener("load", () => {
  let capa = document.getElementById("contenedor");
  let boton = document.getElementById("boton");
  boton.addEventListener("click", () => {
    let configuracion = {
      enabledHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Va todo bien
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let alt = position.coords.altitude;

        capa.innerHTML =
          "Latitud: " +
          lat +
          "<br>" +
          "Longitud: " +
          lon +
          "<br>" +
          "Altitud: " +
          alt +
          "<br>";

        // Mostrar un enlace con el mapa:
        const status = document.querySelector("#status");
        const enlace = document.querySelector("#map-link");

        enlace.href = `https://openstreetmap.org/#map=10/${lat}/${lon}`;
        enlace.textContent = `Latitud: ${lat}, Longitud: ${lon}`;
      },
      (error) => {
        // Se ha producido error
        alert(
          "Se ha producido un error al localizar: " +
            error.code +
            " " +
            error.message
        );
      },
      configuracion
    );
  });
});
