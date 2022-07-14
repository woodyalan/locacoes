const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locacao', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    veiculoid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'veiculo',
        key: 'id'
      }
    },
    clienteid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'id'
      }
    },
    valortotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fim: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'locacao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "fk_34",
        fields: [
          { name: "veiculoid" },
        ]
      },
      {
        name: "fk_52",
        fields: [
          { name: "clienteid" },
        ]
      },
      {
        name: "pk_36",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
