var DataTypes = require("sequelize").DataTypes;
var _cliente = require("./cliente");
var _locacao = require("./locacao");
var _marca = require("./marca");
var _veiculo = require("./veiculo");

function initModels(sequelize) {
  var cliente = _cliente(sequelize, DataTypes);
  var locacao = _locacao(sequelize, DataTypes);
  var marca = _marca(sequelize, DataTypes);
  var veiculo = _veiculo(sequelize, DataTypes);

  locacao.belongsTo(cliente, { as: "cliente", foreignKey: "clienteid" });
  cliente.hasMany(locacao, { as: "locacoes", foreignKey: "clienteid" });
  veiculo.belongsTo(marca, { as: "marca", foreignKey: "marcaid" });
  marca.hasMany(veiculo, { as: "veiculos", foreignKey: "marcaid" });
  locacao.belongsTo(veiculo, { as: "veiculo", foreignKey: "veiculoid" });
  veiculo.hasMany(locacao, { as: "locacoes", foreignKey: "veiculoid" });

  return {
    cliente,
    locacao,
    marca,
    veiculo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
