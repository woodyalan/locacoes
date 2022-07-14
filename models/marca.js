const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marca', {
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
    }
  }, {
    sequelize,
    tableName: 'marca',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_8",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
