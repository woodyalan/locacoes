const { Sequelize } = require("sequelize");
const { initModels } = require("./init-models");

const options = {
  username: "postgres",
  password: "postgres",
  database: "locacoes",
  host: "localhost",
  dialect: "postgres",
};

const conn = new Sequelize(options);

conn
  .authenticate()
  .then(() => {
    console.log("Conectado ao banco de dados");
  })
  .catch((erro) =>
    console.log("Falha ao conectar ao banco de dados: " + erro.message)
  );

let models = initModels(conn);

models = { ...models, conn };

module.exports = models;
