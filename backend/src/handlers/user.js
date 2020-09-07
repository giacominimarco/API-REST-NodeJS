exports.fetch = (req, res, next) => {
  return res.status(200).json([
    {
      name: "Bruno Braga",
      age: 29,
    },
    {
      name: "Mathias Vilas Boas",
      age: 22,
    },
    {
      name: "Mateus Barros",
      age: 26,
    },
  ]);
};
exports.create = (req, res, next) => {};
exports.update = (req, res, next) => {};
exports.deleteUser = (req, res, next) => {};