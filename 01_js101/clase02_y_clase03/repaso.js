let array = ['Ale', 'Gonza', 'Julián', 'Dario', 'Nacho'];

for (let i = 0; i < array.length; i++){
    //console.log(i + '. ' + array[i]);    
}

let automovil = {
    marca : "Ford",
    modelo: "Mondeo",
    anio: 2019,
    color: 'negro',
    decirMarca : function(){
        console.log(this.color);
    } //Métedo
}

//console.log(automovil.decirMarca());

let tareas = [
    {
        titulo : 'Repasar JS',
        estado : 'en progreso',
        mostrarTitulo : function (){
            console.log(this.titulo);
            
        }
    },
    {
        titulo: 'tarea 2',
        estado: 'no iniciada',
    },
    {
        titulo: 'tarea 3',
        estado: 'finalizada',
    },
]
//console.log(tareas[0]);

let textoJSON = JSON.stringify(tareas);
console.log(textoJSON);
console.log(typeof textoJSON);
let objetoJSON = JSON.parse(textoJSON);
console.log(objetoJSON[0]);
console.log(typeof objetoJSON);




