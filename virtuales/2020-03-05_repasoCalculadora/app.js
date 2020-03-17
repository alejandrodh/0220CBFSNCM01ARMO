const sumar = require('./sumar'); //Modulo de terceros (o nuestro)
const fs = require('fs'); //Módulo nativo.

console.log(fs);

// const sumar = function (num1, num2){
//      return num1 + num2;
// }
//sumar = 40; No lo va a permitir si tenemos declarada la constante.

function multiplicar (num1, num2){
    return num1 * num2;
}

console.log(sumar(12, -40));
console.log(multiplicar(12, -40));

