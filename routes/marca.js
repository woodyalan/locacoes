const { Router } = require("express");
const { check, validationResult, checkSchema } = require("express-validator");
const { getAll, save, getById } = require("../controllers/marca");
const { validarRequisicao } = require("../controllers/validation");
const schema = require("../schemas/marca");
const route = Router();

route.get("/:id?", checkSchema(schema), validarRequisicao, async (req, res) => {
  let result;

  if (req.params.id) {
    result = await getById(req.params.id);
  } else {
    result = await getAll();
  }

  res.send(result);
});

route.post("/", checkSchema(schema), validarRequisicao, async (req, res) => {
  const result = await save(req.body);

  res.send(result);
});

route.put("/:id", async (req, res) => {
  res.send({});
});

route.delete("/:id", async (req, res) => {
  res.send();
});

module.exports = route;
