module.exports = {
  id: {
    in: ["params"],
    isInt: true,
  },
  nome: {
    in: ["body"],
    isLength: {
      options: { min: 1, max: 100 },
    },
  },
};
