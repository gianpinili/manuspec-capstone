const knex = require("knex")(require("../knexfile"));

exports.index = async (_req, res) => {
  try {
    const data = await knex("customer_file");
    res.json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving customer files: ${error}`);
  }
};
