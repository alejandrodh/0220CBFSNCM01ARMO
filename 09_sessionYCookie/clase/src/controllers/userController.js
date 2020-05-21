const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');


const controller = {
	// Create - Form to create
	index: (req, res) => {
		// Do the magic
		let userId = req.params.id; //Obtenemos el id que está como parámetro en la ruta.

		//Buscamos a todos los usuarios.
		let usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
		let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
		// Encontremos al usuario en nuestra db y obtengamos todos su datos.
		let usuarioEncontrado = users.find(function (user) {
			return userId == user.id
		});

		res.render('profile', { user : usuarioEncontrado });
	},
	logout : (req, res) => {
		req.session.destroy();
		res.redirect('/');
	}

	
};

module.exports = controller;