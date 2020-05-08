const router = {
 
    routes:  function(req, res){
        // las rutas y las respuestas de cada ruta
        switch (req.url) {
            case '/':
                //Definir el envio de datos. Siempre retorna un string. Siempre colocamos res.end() al final de la función.
                res.end('Página principal');
                break;
            case '/productos':
                let productos = [
                    { titulo: 'remera' },
                    { titulo: 'pantalón' },
                    { titulo: 'zapatillas' }
                ];
                let contenido = 'El total de productos es: ' + productos.length;

                res.end(contenido);
                break;
            case '/login':
                res.end('Formulario de login');
                break;
            default:
                res.end('La página no existe');
                break;
        }
    }

}

module.exports = router;
