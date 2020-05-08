const homePage = require('./src/home');

const router = {
    routes : function(req, res) {
        switch (req.url) {
            case '/':
                //Definimos el cuerpo de datos. Recibe siempre un string. Corta ejecución
                res.end(homePage);
                break;
            case '/productos':
                res.end('Listado de productos');
                break;
            default:
                res.end('La páfina solicitda no existe');
                break;
        }
    }
}

module.exports = router;