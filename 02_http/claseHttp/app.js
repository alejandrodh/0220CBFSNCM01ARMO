const http = require('http');
const router = require('./router');

http.createServer(function(req, res){
    //Cabecera para todas las respuestas/ response.
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
    router.routes(req, res);

    
})
.listen(3000, 'localhost')
