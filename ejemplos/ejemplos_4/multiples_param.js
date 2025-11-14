// Múltiples parámetros en una función de JS

function imprimir(p1, p2, ...params){
	console.log("p1: "+p1)
	console.log("p2: "+p2)
	console.log("...params: "+params)
	console.log('\n')
	
	params.forEach( p => console.log(p))
}
	
	
imprimir(1,2,3,4,5,6)
	
