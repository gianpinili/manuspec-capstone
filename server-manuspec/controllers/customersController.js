const knex = require("knex")(require("../knexfile"));

exports.index = async (_req, res) => {
  try {
    const data = await knex("customers");
    res.json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving customers`);
  }
};
