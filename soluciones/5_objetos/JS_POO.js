class Nomina {
  constructor(sueldo = 0.0, pagaExtra = 0.0, dieta = 0.0, kms = 0.0) {
    this.sueldo = sueldo;
    this.pagaExtra = pagaExtra;
    this.dieta = dieta;
    this.kms = kms;
  }

  sueldoFinal() {
    return this.sueldo + this.pagaExtra + this.kms + this.dieta;
  }
}

class Empleado {
  constructor(numero = 0, nombre = "", departamento = "", nomina = null) {
    this.numero = numero;
    this.nombre = nombre;
    this.departamento = departamento;
    this.nomina = nomina;
  }

  mostrar() {
    console.log(
      `numero: ${this.numero}, nombre: ${this.nombre}, departamento:${
        this.departamento
      }, nomina:${this.nomina.sueldoFinal()}`
    );
  }
}

// Test1 de la clase Empleado:
let nomina1 = new Nomina(1000, 250, 100, 50);
let emp1 = new Empleado(1, "Pepe", "informatica", nomina1);
let nomina2 = new Nomina(1500, 250, 100, 50);
let emp2 = new Empleado(2, "Juan", "informatica", nomina2);
let nomina3 = new Nomina(2000, 250, 100, 50);
let emp3 = new Empleado(3, "Sandra", "informatica", nomina3);
emp1.mostrar();

let array = [emp1, emp2, emp3];
let sueldoTotal = 0;
array.forEach((empleado) => {
  empleado.mostrar();
  sueldoTotal += empleado.nomina.sueldoFinal();
});
console.log("Sueldo medio : " + sueldoTotal / array.length);
