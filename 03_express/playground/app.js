const express = require('express');
const app = express();

app.listen('3030', function(){console.log('running on 3030')});
const series = [
    {
        id: 1,
        name: 'Friends'
    },
    {
        id: 2,
        name: 'Breaking Bad'
    },
    {
        id: 3,
        name: 'Dexter'
    },
    {
        id: 4,
        name: 'Six Feet Under'
    },
    {
        id: 5,
        name: 'Stranger Things'
    },
]              


app.get('/serie/:id', function(req, res){
    let serieId = req.params.id;
    serie = series.filter(function(serie){
       return serie.id == serieId;
    });
    res.send(serie[0]);

});