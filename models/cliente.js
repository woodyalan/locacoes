const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tipo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING(17),
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    cnh: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cliente',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_41",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
