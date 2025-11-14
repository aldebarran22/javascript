class Persona {
    // Atributos
    #nombre;
    #edad;
    #altura;

    // Variables estáticas
    static #numInstancias = 0;
    
    constructor(nombre='', edad=0, altura=0.0){
        this.#nombre = nombre
        this.#edad = edad
        this.#altura = altura

        Persona.#numInstancias++
    }

    static getNumInstancias(){
        return  Persona.#numInstancias
    }
    toString(){
        return this.#nombre + " " + this.#edad + " " + this.#altura
    }

    getNombre(){
        return this.#nombre
    }

    setNombre(nombre){
        this.#nombre = nombre
    }

    getEdad(){
        return this.#edad
    }

    setEdad(edad){
        this.#edad = edad
    }

    getAltura(){
        return this.altura
    }

    setAltura(altura){
        this.#altura = altura
    }

    hablar(otro){
        if (otro == null || Object.is(this,otro))
            console.log(this.#nombre + " habla solo")
        else 
            console.log(this.#nombre+" habla con "+ otro.#nombre)        
    }
}

function testPersona(){
    let p1 = new Persona('Eva',34,1.77)
    let p2 = new Persona('Sara')
    console.log('instancias: '+Persona.getNumInstancias())
    p1.setNombre("Gema")
    console.log(p1)
    console.log(p1.toString())
    //p1['#nombre']='Sara' Lo crea 
    console.log(p2)
    console.log(p2.toString())
   
}

export {Persona, testPersona};