const knex = require("knex")(require("../knexfile"));

exports.index = async (_req, res) => {
  try {
    const data = await knex("customers");
    res.json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving customers: ${error}`);
  }
};

exports.singleCustomer = async (req, res) => {
  try {
    const data = await knex("customers").where({ id: req.params.id });

    if (!data.length) {
      return res
        .status(404)
        .send(`Customer with ID ${req.params.id} not found`);
    }

    res.json(data[0]);
  } catch (error) {
    res
      .status(400)
      .send(`Error retrieving customer ${req.params.id}: ${error}`);
  }
};

exports.addCustomer = async (req, res) => {
  //Validate the request body for required data
  if (
    !req.body.name ||
    !req.body.vin ||
    !req.body.car ||
    !req.body.phone ||
    !req.body.email
  ) {
    return res
      .status(404)
      .send("Please make sure to provide name, vin, car, phone and email");
  }

  try {
    const data = await knex("customers").insert(req.body);

    const newCustomer = `/customers/${data[0]}`;
    res.status(201).location(newCustomer).end(newCustomer);
  } catch (error) {
    res.status(404).send(`Error adding customer: ${error}`);
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    await knex("customers").update(req.body).where({ id: req.params.id });
    res.send(`Customer with id: ${req.params.id} has been updated`);
  } catch (error) {
    res.status(404).send(`Error updating customer ${req.params.id}: ${error}`);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await knex("customers").delete().where({ id: req.params.id });
    res.status(204).send(`Customer with id: ${req.params.id} has been deleted`);
  } catch (error) {
    res.status(404).send(`Error deleting customer ${req.params.id}: ${error}`);
  }
};
