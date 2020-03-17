const fs = require('fs'); //


let tareas = {
    leerJson : function (){
        let tareasJson = fs.readFileSync('tareas.json', 'utf-8');
        let tareasObj = JSON.parse(tareasJson);
        return tareasObj;
    },
    
    escribirJson: function (datos){
        //arrayTareas: pasarlo a cadena de texto
        let tareasAGuardar = JSON.stringify(datos, null, ' ');
        //guardar en archivo Json.
        fs.writeFileSync('tareas.json', tareasAGuardar);
    },

    nuevaTarea : function(){

    },
    tareasPorEstado : function(){

    }

}







module.exports = tareas;