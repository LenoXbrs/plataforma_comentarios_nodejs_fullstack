//Model
const Sequelize = require('sequelize');

const connection = require('./database');

const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }

});

//para criar a tabela no banco

Pergunta.sync({force: false}).then(()=>{
    
}); 