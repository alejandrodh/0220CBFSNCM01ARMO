module.exports = (sequelize, dataTypes) => {
    
    const alias = "Movie"; //Chequear sintaxis. Va en singular.
    const cols = {
        title : dataTypes.STRING,
    }
    const config = {
        timestamps : true, //Chequear si los campos estan en camel case
    }
    
    const Movie = sequelize.define(alias, cols, config);

    return Movie;
}