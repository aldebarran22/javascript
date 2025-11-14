import {Persona} from './persona.js';

class Guia extends Persona {
    // Atributos
    #ambito;
    #idiomas;

    constructor(nombre='', edad=0, altura=0.0, ambito='N',idiomas=[]){
        // Llamar al constructor de la clase Padre:
        super(nombre,edad,altura)

        this.#ambito = ambito
        this.#idiomas = idiomas
    }

    getAmbito(){
        return this.#ambito
    }

    setAmbito(ambito){
        this.#ambito = ambito
    }

    getIdiomas(){
        return this.#idiomas
    }

    setIdiomas(idiomas){
        this.#idiomas = idiomas
    }

    addIdiomas(...idiomas){
        this.#idiomas.push(...idiomas)
    }

    toString(){
        return super.toString() + " " + this.#ambito + " [" + this.#idiomas.join(',')+"]"
    }

    hablar(otro){
        if (otro == null || Object.is(this,otro))
            super.hablar(otro)

        else {
            let c1 = new Set(this.#idiomas)
            let c2 = new Set(otro.#idiomas)
            const intersection = new Set([...c1].filter((x) => c2.has(x)));  
            if (intersection.size == 0)
                throw new Error("Los guías no tienen un idioma común")
            else
                console.log(this.getNombre() + " habla con " + otro.getNombre() + " en " + [...intersection])
        }
    }
}

function testGuia(){
    try {
        let g1 = new Guia('Sara',45,1.67,'I',['ingles','frances','portugues'])
        let g2 = new Guia('Raquel',42,1.77,'N',['aleman','portugues','italiano'])
        console.log(g1)
        console.log(g1.toString())
        g1.hablar(g2)
    } catch(err){
        console.error(err.message)
    }
}

export {Guia, testGuia};