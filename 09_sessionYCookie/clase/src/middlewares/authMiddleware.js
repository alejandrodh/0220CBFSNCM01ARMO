function authMiddleware(req, res, next){
    //Necesitamos crear una variable accesible desde todas las vistas que nos permita saber si un usuario está o no logueado
    res.locals.userLoggedIn = false;
    if(req.session.email != undefined){
        //Si el usuario pasó por el loggin entónces podemos tomar el email que colocamos en session y pasarlo dentro de la variable global `locals` en una posición creada por nosotros. Para este caso a mi se me ocurrió: `userLoggedIn`. De esta forma ahora podremos usarla en las vistas y hacer condicionales allí. Por ejemplo: ocultar las opciones de menú "ingrasar" y "Creá tu cuenta" para colocar el acceso al perfil y la opción de logout.
        //Revisen /partials/headerNav.js
        res.locals.userLoggedIn = req.session.email;
        res.locals.userId = req.session.id;
    }
    next();
}

module.exports = authMiddleware;