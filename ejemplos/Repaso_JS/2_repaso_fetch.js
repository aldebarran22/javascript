const url = "https://api.imgflip.com/get_memes";

const procesar = (memes) => {
  console.log("resul:" + memes.length);
};

const getMemes = () => {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resul) => {
      procesar(resul.data.memes);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("todo ok");
    });
};

const getMemes2 = async () => {
  await fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resul) => {
      procesar(resul.data.memes);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("todo ok");
    });
};

getMemes();
getMemes2();
