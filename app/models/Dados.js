module.exports = (sequelize, DataTypes) =>{
    const Dados = sequelize.define('dados', {
        estacao_id: DataTypes.STRING,
        temperatura: DataTypes.STRING,
        velocidade_vento: DataTypes.STRING,
        umidade: DataTypes.STRING,
        data: DataTypes.STRING
    });
    return Dados;
}