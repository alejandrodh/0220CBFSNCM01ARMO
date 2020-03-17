// crear una variable con una array de 3 tareas.
// Las tareas son objetos literales con las propiedades titulo y estado.
const tareasObj = require('./tareas');//ruta al archivo.


let action = process.argv[2];


 //console.log(action);

switch (action){
    case 'listar' :
        // function listar () {
        //     console.log("Lista de tareas:");
        //     let tareas = tareasObj.leerJson();
        //     for (let i = 0; i < tareas.length; i++) {
        //         console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        //     }
        //     console.log();
        // }
        // listar();
        console.log("Lista de tareas:");
        let tareas = tareasObj.leerJson();
        // for (let i = 0; i < tareas.length; i++) {
        //     console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        // }

        tareas.forEach(function(tarea, i){
            console.log(i + '. ' + tarea.titulo + ' - ' + tarea.estado);
        });


        console.log();
        break;
    case undefined:
        console.log('Por favor, ingresá una acción.');
        break;

    case 'crear':
        let tareaNueva = {
            titulo: process.argv[3],
            estado: 'pendiente'
        };

       // console.log(tareaNueva);
        
        let todasLasTareas = tareasObj.leerJson();
        todasLasTareas.push(tareaNueva);       
        
        //Guardar la tarea
        tareasObj.escribirJson(todasLasTareas);
        
        break;

        case 'filtrar': 
            let estado = process.argv[3];
            let todasTareas = tareasObj.leerJson();

            let tareasPorEstado = todasTareas.filter(function(tarea){
                return tarea.estado == estado
            })

            console.log(tareasPorEstado);

            break;

    default:
        console.log('No ingresaste una acción válida.');
        break;
}

