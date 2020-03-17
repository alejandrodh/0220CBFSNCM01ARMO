// Variables
// --------

// Una variable es un espacio de memoria para guardar información.
  //var nombre = "Ale"; //Dejando de lado esta forma.
  //ES6 incorpora:
  //let   
  //const //No permiten cambio.
  let numero = 1234567; //Numerica
  let string = 'Una palabra'; //Cadena de texto.
  let boolean = true; //false  

  let array = [1, 'hola', ['rojo', 'verde'], true]; //poscisiones que arrancan en 0. 
  let alumno = {
    nombre : 'Ale',
    curso: 'FullStack',
    year:2020,
    semestre: 'S01',
    saludar: function(){
      return 'Hola soy ' + this.nombre
    }
  }

  let nulo = null;
  let nodefinido; //undefined;
  let noEsNumero = "hola"/ 2; //NaN 
  noEsNumero = "hola" //Es posible solo con let.

  const esUnDatoQueNoCambia = "FullStack";
  //esUnDatoQueNoCambia = "hola"; //Va a dar error.
  




// Tipos de datos
// --------------


// console.log()
// -------------
// console.log(array); //Solo para mirar en consola un dato.
// console.log(esUnDatoQueNoCambia);

// Ejecución con Node


// Operadores
// ----------


// Operadores Aritméticos
// ----------------------
let num1 = 10;
let num2 = 20;
let resultado = num1 + num2;
//Módulo: nos permite encontrar el resto de una división.


//console.log(num1 + num2);



// Operadores de comparación
// -------------------------

let menor = 3;
let mayor = 3;
// console.log(menor !== mayor);


// Operadores lógicos
// ------------------

// Condicionales
// ------------------
// if (nodefinido){
//   console.log("Entré al if");
// } else if (true){
//   console.log("Entré al 2 if");
// }

// Bucles
// ------

// For
// ---
for(let i = 0; i<8; i++){
  //
}

//Do While
  // let numeros = [2,3,5,6,7,8,9,3,5]
  // let i = 0;
  // do {
  //   console.log(numeros[i]);

  //   if (numeros[i] === 5) {
  //     console.log("Se encontró un 5! en la posición " + i);
  //     break;
  //   }
  //   i++;
  // } while (i < numeros.length)

// Funciones
// ---------
  //return vs console.log();
  //scopes de variables.
  //let y const
  let nombre = "Stefano";

  function saludar(){
    //let nombre = "Santiago";
    console.log(nombre);
    
    return "hola";
  }

//console.log(nombre);
console.log(saludar());


  







//---------------
