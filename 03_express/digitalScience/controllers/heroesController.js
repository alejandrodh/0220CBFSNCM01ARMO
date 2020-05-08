//const data = require('../data/heroes.json');
const fs = require('fs');
const path = require('path');


const heroesController = {

    index : function(req, res){
        let json = path.join(__dirname, '../data/heroes.json');
        let data = fs.readFileSync(json, 'utf-8');
        res.send(data);
    },
    show : function(req,res){
        let heroeId = req.params.id;
        //Para usar 3 igualews en el filter debemos pasar a número el dato que viene desde la url. Ese dato siempre viene en foramto de texto.
        //heroeId = Number(heroeId);
        //Otra opción es usar la función:
        //heroeId = parseInt(heroeId);

        let json = path.join(__dirname, '../data/heroes.json');
        let data = fs.readFileSync(json, 'utf-8');
        let heroes = JSON.parse(data);

        let heroe = heroes.filter(function(element){
            return element.id === heroeId;
        }); //Filter retorna un nuevo array. Por ello debemos preguntar por la posición 0: heroe[0].

        //probar con find: En este caso find devolverá directamente el objeto buscado. 

        // console.log(typeof heroeId);

        if( heroe[0] ){
            res.send('Datos del heroe: ' + 'nombre: ' + heroe[0].nombre + '\n\n' + heroe[0].profesion);
        } else {
            res.send ('No hay heroes con ese número de id');
        }    
        
    }
}


module.exports = heroesController;