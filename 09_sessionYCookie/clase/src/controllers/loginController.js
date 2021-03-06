const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');


const controller = {
	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render('login');
	},
	
	// login -  Method to log user
	login: (req, res) => {
		if(req.body.email.trim() == ''){
			res.send('El campo emial es obligatorio.');
		} else if (req.body.password == ''){
			res.send('El campo contraseña es obligatorio.');
		} else {

			let usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
			let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
			let userEmail = req.body.email;

			// Encontrar al usuario en nuestra db.
			let usuarioEncontrado = users.find(function(user){
				return userEmail === user.email
			});

			if (usuarioEncontrado == undefined){
				res.send('El usuario no se encuentra registrado')
			} else {
				req.session.email = usuarioEncontrado.email; //Guardo los datos del usuario en Session.
				req.session.id = usuarioEncontrado.id;
				res.redirect('/profile/' + usuarioEncontrado.id);
			}
			
		}
	},

	
};

module.exports = controller;