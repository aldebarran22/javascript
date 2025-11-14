let url = './universidades2.xml';
    let cabs = new Headers()

    cabs.append('Content-Type','text/plain; charset=UTF-8');
      
    // Para ver con acentos:
    fetch(url, cabs)
    .then(response => {response.arrayBuffer()})
    .then(buffer => {
        const decoder = new TextDecoder('iso-8859-1');
        const text = decoder.decode(buffer);
        console.log(text);
    })
    .catch(err => console.error(err))