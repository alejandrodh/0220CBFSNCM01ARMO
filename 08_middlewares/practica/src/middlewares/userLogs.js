const fs = require('fs');
const path = require('path');

function accessLogs(req, res, next){
    let file = path.join(__dirname, '..', 'logs', 'userLogs.txt')
    fs.appendFileSync(file, '\r\n El usuario ingresó a la ruta: ' + req.url + '\n')

    next();
}

module.exports = accessLogs;