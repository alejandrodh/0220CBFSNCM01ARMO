//Fetch 
//https://apis.datos.gob.ar/georef/api/provincias

let verMas = document.querySelector('.verMas');
verMas.addEventListener('click', function(e){
    e.preventDefault();
    buscarProvincias();

});


function buscarProvincias(){
    let url = 'https://apis.datos.gob.ar/georef/api/provincias'
    fetch(url)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            //Acá podemos procesar los datos.
            let lista = document.querySelector('.lista');
            let provincias = datos.provincias


            provincias.forEach(function (provincia) {
                lista.innerHTML += '<li>' + provincia.nombre + '</li>'
            })
            console.log(lista);


        })
        .catch(function (error) {
            console.log(error);
        })

}


let query = location.search;
let queryObj = new URLSearchParams(query);
let user = queryObj.get('user');
console.log(query);
console.log(queryObj);
console.log(user);
