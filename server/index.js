const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);







/* const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('atividade', 'laviny', '12345', {
    host: 'localhost',
    dialect: 'mysql',
  });

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso');
}).catch(function(err){
    console.log('Erro' + err);
}); */