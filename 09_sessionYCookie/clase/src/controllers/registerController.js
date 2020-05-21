const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { check, validationResult, body } = require('express-validator'); //destructruing


const controller = {
	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render('register');
	},
	
	// Create -  Method to store
	store: (req, res) => {	
		
		let errors = validationResult(req);		
		
		if(errors){ //Si errrors tiene datos
			res.render('register', { errors: errors.errors})
			
		} else { //Si errors está vacía
			console.log(errors);
			console.log('En store dentr de controller');
			//Agregar controles por si el archivo no existe o si el json está vacío.
			let usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
			let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
			let nextId;

			//Creamos id para el usuario
			if(users == false){
				nextId = 1;
			} else {
				nextId = users[users.length - 1].id + 1;
			}

			// Do the magic
			let user = {
				id: nextId,
				name: req.body.name,
				email: req.body.email,
				password: bcryptjs.hashSync(req.body.password, 10),
				image: 'default-image.png',
			}

			users = [...users, user];

			let usersJson = JSON.stringify(users, null, ' ');

			fs.writeFileSync(usersFilePath, usersJson);

			res.redirect('/');
		}
	},

	
};

module.exports = controller;