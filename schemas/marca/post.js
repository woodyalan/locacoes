module.exports = {
  nome: {
    in: ["body"],
    isLength: {
      options: { min: 1, max: 100 },
    },
  },
};
