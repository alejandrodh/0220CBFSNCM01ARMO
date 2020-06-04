module.exports = (sequelize, dataTypes) => {
    const alias = 'Movies';
    const cols = {
        title: {
            type: dataTypes.STRING,
        }
    }
    const config = {
        // tableName = 'movies'
        timestamps : true,
    }

    const Movie = sequelize.define(alias, cols, config);


    return Movie;
}