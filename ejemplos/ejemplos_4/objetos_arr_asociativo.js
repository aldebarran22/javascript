// Definición de un objeto con json y tratamiento como un array asociativo:

let obj = {nombre:"Juan", edad:45, lenguajes: ["java","python","C++"]}

for (let v in obj){
	console.log(v, obj[v])
}

