module.exports = (sequelize, DataTypes) =>{
    const Estacoes = sequelize.define('estacoes', {
        serial: DataTypes.STRING,
        lat: DataTypes.STRING,
        lon: DataTypes.STRING,
        nome: DataTypes.STRING,
    });
    return Estacoes;
}