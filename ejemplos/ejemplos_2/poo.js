/* Ejemplos de crear instancias con JS */

// 1. Utilizando la clase object
function testObject(){
    let obj = new Object();

    // Se añaden propiedades dinámicamente
    obj.nombre = "Andres"
    obj.edad = 34
    console.log(obj)
    // Acceso a propiedades:
    obj['nombre'] = 'Pepe'
    console.log(obj.nombre)

    // Y funciones: OJO usar function anónima, no funciona con función arrow
    obj.print = function() {
        console.log('nombre:'+this.nombre)
        console.log('edad:'+this.edad)
    }

    obj.print()
}

function CursoES5(titulo, horas, temario){
    // Definición de atributos
    this.titulo = titulo
    this.horas = horas
    this.temario = temario
    this.toString = () => {
        return this.titulo + ' ' + this.horas + " " + this.temario    
    }
    this.equals = (otro) => {
        return this.titulo == otro.titulo && this.horas == otro.horas && this.temario == otro.temario
    }
}
function testPlantilla(){
    curso1 = new CursoES5('JavaScript ES6', 40, "DOM, objetos, json, xml")
    curso2 = new CursoES5('JavaScript ES6', 40, "DOM, objetos, json, xml")
    console.log(curso1.toString())
    console.log(curso1)
    if (curso1.equals(curso2))
        console.log('Cursos iguales')
    else
    console.log('Cursos NO iguales')
}

class Curso {

    constructor(titulo, horas, ...alumnos){
        this.titulo = titulo
        this.horas = horas
        this.alumnos = alumnos
    }

    toString(){
        return this.titulo + " " + this.horas + " [" + this.alumnos.join(',') + "]"
    }

    altaAlumno(...args){
        this.alumnos.push(...args)
    }
}

function testClass(){
    let curso = new Curso('Java',120, 'Ana','Raquel','Jaime')
    curso.altaAlumno('Raul','Andres')
    console.log(curso.toString())
    console.log(curso)
}

function testObjetoEnLinea(){
    let obj = {
        titulo:'Word',
        horas:30,
        alumnos:[],
        alta:function(...alumno){
            this.alumnos.push(...alumno)
        },
        toString:function(){
            return this.titulo + " " + this.horas + " [" + this.alumnos.join(',') + "]"
        }
    }
    obj.alta('Sonia','Angel')
    console.log(obj)
    console.log(obj.toString())
}


testObject()
testPlantilla()
testClass()
testObjetoEnLinea()

