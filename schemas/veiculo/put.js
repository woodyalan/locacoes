module.exports = {
  id: {
    in: ["params"],
    isInt: true,
  },
  marcaid: {
    in: ["body"],
    isInt: true,
    optional: true,
  },
  modelo: {
    in: ["body"],
    isLength: {
      options: { min: 1, max: 100 },
    },
    optional: true,
  },
  ano: {
    in: ["body"],
    isInt: true,
    optional: true,
  },
  foto: {
    in: ["body"],
    isLength: { min: 1, max: 100 },
    optional: true,
  },
  placa: {
    in: ["body"],
    isLength: { min: 7, max: 7 },
    optional: true,
  },
  cor: {
    in: ["body"],
    isLength: { min: 1, max: 50 },
    optional: true,
  },
  valordiaria: {
    in: ["body"],
    isDecimal: true,
    optional: true,
  },
};
