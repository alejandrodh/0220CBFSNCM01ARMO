const fs = require('fs');
// let users = require('../data/users'); //NO USAR ASI. HACERLO CON FS y PARSEARLO dentro del método o crear una función independeintes que traiga los datos parseados y ejecutarla dentro del método.
//El archivo json debe arrancar vacío. Cuando se cargue el primer usuario se creará el array.
const bcryptjs = require('bcryptjs');

const registerController = {
    //Muestra un listado de usarios
    index:function(req, res){
        let users = fs.readFileSync(__dirname + '/../data/users.json', 'utf8');
        users= JSON.parse(users);
        res.render('users', {users: users});
    },
    //Mostar formulario de creación de recurso
    create: function(req, res){
        res.render('register');
    },
    //Guardar datos del usuario en json
    store: function(req,res){
        //Crear un usuario
        let user = {
            id:'',
            email:req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10), 
            avatar:req.files[0].filename,
        } //Más adelante vamoa a hashear la contraseña.
        //Agregar el dato del archivo para poder recuperarlo.

        //Agregar al usuario en la base de datos.
        let users = fs.readFileSync(__dirname + '/../data/users.json', 'utf8');
        users = JSON.parse(users);
        users = [...users, user]; //Tengo el array de usuarios en formato de objeto
        users = JSON.stringify(users, null, ' ');

        //Guardarlo
        fs.writeFileSync(__dirname + '/../data/users.json', users);

        //redirigir a otrea vista
        res.redirect('/register/users');
    }
}


module.exports = registerController;