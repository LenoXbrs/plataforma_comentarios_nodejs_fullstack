//Model
const Sequelize = require('sequelize');

const connection = require('./database');

//@Entity
const Pergunta = connection.define('pergunta',{
    //@Column
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
     //@Column
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }

});

//para criar a tabela no banco

Pergunta.sync({force: false}).then(()=>{}); 

//para poder gravar no banco
module.exports = Pergunta;