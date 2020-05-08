//Controlador de productos
const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(__dirname, '/../data/heroes.json'));
console.log( JSON.stringify(data));

const productsController = {
    //Mostar todos los productos
    index : function(req, res){
        
        res.send('Lisa de nuestros productos' + data[0]);
    },
    //Mostrar 1 solo producto
    show: function (req, res) {
        res.send('Detalle del producto ....' + req.params.pepe)
    },
    //Borrar un producto
    delete : function(){

    }

}

module.exports = productsController;
