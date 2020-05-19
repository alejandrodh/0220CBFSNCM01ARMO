const fs = require('fs');
const bcryptjs = require('bcryptjs');

const loginController = {
    //Mostar formulario de creación de recurso
    create: function (req, res) {
        res.render('login');
    },
    login: function(req, res){
        //Traer todo los usuarios de mi sistema.
        let users = fs.readFileSync(__dirname + '/../data/users.json', 'utf8');
        users = JSON.parse(users);

        //Chequear que el usuario exista en la lista de usuarios.
        users.forEach(function(user){
            if (req.body.email === user.email && bcryptjs.compare(req.body.password, user.password)){
                //Si existe lo dejo pasar
                res.send('Usuario logueado.')
            }          
        })

        //Sino le devuelveo un error.
        res.send('Usuario o contraseña incorrecta');

    }
}

module.exports = loginController;