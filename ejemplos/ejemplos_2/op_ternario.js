var numeroDeDia = 3;
var weekDays = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
var dia = (numeroDeDia < weekDays.length) ? weekDays[numeroDeDia - 1] : 'dia incorrecto';
console.log(dia);