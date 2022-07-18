const { marca } = require("../models");

const getAll = async () => {
  const marcas = await marca.findAll();
  return marcas;
};

const getById = async (id) => {
  return await marca.findByPk(id);
};

const save = async ({ nome }) => {
  return await marca.create({ nome });
};

module.exports = { getAll, save, getById };
