module.exports = {
  marcaid: {
    in: ["body"],
    isInt: true,
  },
  modelo: {
    in: ["body"],
    isLength: {
      options: { min: 1, max: 100 },
    },
  },
  ano: {
    in: ["body"],
    isInt: true,
  },
  foto: {
    in: ["body"],
    isLength: {
      options: { min: 1, max: 100 },
    },
  },
  placa: {
    in: ["body"],
    isLength: {
      options: { min: 7, max: 7 },
    },
  },
  cor: {
    in: ["body"],
    isLength: {
      options: { min: 1, max: 50 },
    },
  },
  valordiaria: {
    in: ["body"],
    isDecimal: true,
  },
};
