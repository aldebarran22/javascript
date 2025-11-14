// Ejemplo de herencia y composición

class Persona {

    constructor(nombre = "", edad = 0, altura = 0.0) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }

    cumple() {
        this.edad++;
    }

    hablarCon(otro = null) {
        if (otro == null)
            console.log(this.nombre + " esta hablando solo ...");
        else {
            console.log(this.nombre + " y " + otro.nombre + " están hablando...");
        }
    }

    toString() {
        return this.nombre + " " + this.edad.toString() + " " + this.altura.toString();
    }
}

class Guia extends Persona {

    constructor(nombre = "", edad = 0, altura = 0.0, ambito = '', idiomas = []) {
        super(nombre, edad, altura);
        this.ambito = ambito;
        this.idiomas = idiomas;
    }

    hablarCon(otro = null) {
        if (otro === null)
            super.hablarCon(null);

        else {
            // Comprobar si hablan el mismo idioma:
            let c1 = new Set(this.idiomas);
            let c2 = new Set(otro.idiomas);

            let inter = new Set([...c1].filter(i => c2.has(i)));
            if (inter.size > 0)
                console.log(this.nombre, "y", otro.nombre, ' pueden hablar en ', inter);
            else
                console.log(this.nombre, "y", otro.nombre, ' no pueden hablar')
        }
    }

    toString() {
        return super.toString() + " " + this.ambito + " (" + this.idiomas.join(',') + ")";
    }
}

class Grupo {

    constructor(item = null) {
        this.grupo = [];
        if (item != null)
            this.grupo.push(item);
    }

    add(item) {
        this.grupo.push(item);
    }

    addAll(...items) {
        for (let i of items)
            this.grupo.push(i);
    }

    toString() {
        return "[" + this.grupo.join('\n') + "]\n";
    }
}


function testPersona() {
    p1 = new Persona('Ana', 23, 1.77);
    p2 = new Persona('Jose', 26, 1.79);
    console.log(p1);
    p1.cumple();
    console.log(p1);
    p1.hablarCon();
    p1.hablarCon(p2)
}

function testGuia() {
    g1 = new Guia('Pepe', 45, 1.88, 'N', ['ingles', 'frances']);
    g2 = new Guia('Carmen', 48, 1.55, 'I', ['ingles', 'frances']);
    console.log(g1);
    g1.cumple();
    console.log(g1.toString());
    g1.hablarCon(g2);
}

function testGrupo() {
    grupo = new Grupo();
    g1 = new Guia('Pepe', 45, 1.88, 'N', ['ingles', 'frances']);
    p1 = new Persona('Ana', 23, 1.77);
    p2 = new Persona('Jose', 26, 1.79);
    g2 = new Guia('Carmen', 48, 1.55, 'I', ['ingles', 'frances']);
    grupo.add(g1);
    grupo.addAll(g2, p1, p2);
    console.log(grupo);
    console.log(grupo.toString());
}

testGrupo();