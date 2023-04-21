//conexao com sequelize
const Sequelize = require('sequelize')

const connection = new Sequelize('banco_comentarios','root','123456',{
    host: 'localhost',
    dialect: 'mysql'

})

module.exports = connection;