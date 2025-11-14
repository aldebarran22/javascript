/* Funciones con arrays de dos dimensiones y conversión a tabla HTML */

const fRandom = () => {
    return Math.floor(Math.random() * 100);
}

// Tabla de 2 dimensiones de números aleatorios
const tabla = (filas, cols) => {
    tb = new Array(filas);
    for (let i = 0 ; i < filas ; i++){
        tb[i] = new Array(cols);

        for (let j = 0 ; j < cols ; j++)
            tb[i][j] = fRandom();        
    }
    return tb;
}

const imprimirTabla = (tabla) => {
    for (fila of tabla){
        for (item of fila){
            console.log(item);
        }
        console.log('----');
    }
}

// Recibe una tabla de 2 dimensiones y la pasa a HTML
const tablaHTML = (tabla) => {
    let html = '<table>';
    tabla.forEach((fila) => {
        html += "<tr>";
        fila.forEach((value)=> {
            html += `<td>${value}</td>`
        })
        html += "</tr>";
    })
    html += '</table>';
    return html;
}

tb = tabla(6,8);
console.log(tablaHTML(tb));