// const mysql = require('mysql2/promise');

// const connection = mysql.createPool({
//   host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
//   user: 'root', // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
//   password: '123,', // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
//   database: 'rest_exercicios'});

// module.exports = connection;

const { MongoClient } = require('mongodb');

const OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

let db = null;

const connection = () => {
    return db
    ? Promise.resolve(db)
    : MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
    db = conn.db('model_example');
    return db;
    })
};

module.exports = connection;