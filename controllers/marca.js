const { marca } = require("../models");

const save = async ({ nome }) => {
  return await marca.create({ nome });
};

const update = async (id, { nome }) => {
  return await marca.update({ nome }, { where: { id } });
};

module.exports = { save, update };
