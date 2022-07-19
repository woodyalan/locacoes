const { Router } = require("express");
const { checkSchema } = require("express-validator");
const { validarRequisicao } = require("../controllers/validation");
const {
  save,
  getAll,
  getById,
  updateById,
  removeById,
} = require("../controllers/default");
const { veiculo } = require("../models");
const postSchema = require("../schemas/veiculo/post");
const getSchema = require("../schemas/veiculo/get");
const putSchema = require("../schemas/veiculo/put");
const deleteSchema = require("../schemas/veiculo/delete");
const route = Router();

route.get(
  "/:id?",
  checkSchema(getSchema),
  validarRequisicao,
  async (req, res) => {
    try {
      let result;

      if (req.params.id) {
        result = await getById(veiculo, req.params.id);
      } else {
        result = await getAll(veiculo);
      }

      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
);

route.post(
  "/",
  checkSchema(postSchema),
  validarRequisicao,
  async (req, res) => {
    try {
      const result = await save(veiculo, req.body);
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
);

route.put(
  "/:id",
  checkSchema(putSchema),
  validarRequisicao,
  async (req, res) => {
    try {
      await updateById(veiculo, req.params.id, req.body);

      const result = await getById(veiculo, req.params.id);

      res.send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
);

route.delete(
  "/:id",
  checkSchema(deleteSchema),
  validarRequisicao,
  async (req, res) => {
    try {
      await removeById(veiculo, req.params.id);

      res.send();
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
);

module.exports = route;
