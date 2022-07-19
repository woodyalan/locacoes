const { Router } = require("express");
const { checkSchema } = require("express-validator");
const { save, update } = require("../controllers/marca");
const { getById, getAll, removeById } = require("../controllers/default");
const { validarRequisicao } = require("../controllers/validation");
const { marca } = require("../models");
const getSchema = require("../schemas/marca/get");
const postSchema = require("../schemas/marca/post");
const putSchema = require("../schemas/marca/put");
const deleteSchema = require("../schemas/marca/delete");

const route = Router();

route.get(
  "/:id?",
  checkSchema(getSchema),
  validarRequisicao,
  async (req, res) => {
    let result;

    if (req.params.id) {
      result = await getById(marca, req.params.id);
    } else {
      result = await getAll(marca);
    }

    res.send(result);
  }
);

route.post(
  "/",
  checkSchema(postSchema),
  validarRequisicao,
  async (req, res) => {
    const result = await save(req.body);

    res.send(result);
  }
);

route.put(
  "/:id",
  checkSchema(putSchema),
  validarRequisicao,
  async (req, res) => {
    await update(req.params.id, req.body);

    const result = await getById(req.params.id);

    res.send(result);
  }
);

route.delete(
  "/:id",
  checkSchema(deleteSchema),
  validarRequisicao,
  async (req, res) => {
    await removeById(marca, req.params.id);

    res.send();
  }
);

module.exports = route;
