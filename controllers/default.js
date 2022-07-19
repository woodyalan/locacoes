const getAll = async (model) => {
  return await model.findAll();
};

const getById = async (model, id) => {
  return await model.findByPk(id);
};

const removeById = async (model, id) => {
  return await model.destroy({ where: { id } });
};

const save = async (model, data) => {
  return await model.create(data);
};

const updateById = async (model, id, data) => {
  return await model.update(data, { where: { id } });
};

module.exports = { getAll, getById, removeById, save, updateById };
