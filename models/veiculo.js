const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "veiculo",
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      marcaid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "marca",
          key: "id",
        },
      },
      modelo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      ano: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      foto: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      placa: {
        type: DataTypes.STRING(7),
        allowNull: false,
      },
      cor: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      valordiaria: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "veiculo",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "fk_22",
          fields: [{ name: "marcaid" }],
        },
        {
          name: "pk_5",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
