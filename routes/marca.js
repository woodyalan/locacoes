const { Router } = require("express");
const { conn } = require("../models");
const route = Router();

route.get("/:id?", (req, res) => {
  res.send([]);
});

route.post("/", (req, res) => {
  res.send({});
});

route.put("/:id", (req, res) => {
  res.send({});
});

route.delete("/:id", (req, res) => {
  res.send();
});

module.exports = route;
