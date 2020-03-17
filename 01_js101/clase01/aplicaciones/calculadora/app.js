const sumar = require('./sumar.js');  //Esta función permite buscar otros archivos. Siempre con ./
const restar = require('./restar');
console.log(sumar);
console.log(restar);
console.log('Creando una calculadora');

function multiplicar (num1, num2){
    if(num1 === 0){
        return 0;
    } else if (num2 === 0){
        return 0;
    } 
    return num1 * num2;
}

function dividir (num1, num2) {
    if(num2 === 0){
        return "No es posible dividir por 0."
    }
    return num1 / num2;
}


console.log(sumar(10,200));
console.log(restar(200, 10));
console.log(multiplicar(2, 10));
console.log(dividir(10, 2));
