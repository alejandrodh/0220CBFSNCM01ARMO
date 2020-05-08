const http = require ('http');
const router = require('./router');

http.createServer(function(req, res){
    //Definimoms las cabeceras
    res.writeHead(200, { 'Content-Type':'text/plain; charset=utf-8'});
    router.routes(req, res);

})
.listen(3000, 'localhost');