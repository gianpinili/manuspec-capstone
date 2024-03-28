const knex = require("knex")(require("../knexfile"));

exports.index = async (_req, res) => {
  try {
    const data = await knex("profile");
    res.json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving profile: ${error}`);
  }
};

exports.addProfile = async (req, res) => {
  //Validate the request body for required data
  if (
    !req.body.profile_name ||
    !req.body.number ||
    !req.body.tech_number ||
    !req.body.position ||
    !req.body.email
  ) {
    return res
      .status(404)
      .send(
        "Please make sure to provide name, phone, tech number, position and email"
      );
  }

  try {
    const data = await knex("profile").insert(req.body);

    const newProfile = `/profile/${data[0]}`;
    res.status(201).location(newProfile).end(newProfile);
  } catch (error) {
    res.status(404).send(`Error adding profile: ${error}`);
  }
};

exports.singleProfile = async (req, res) => {
  try {
    const data = await knex("profile").where({ id: req.params.id });

    if (!data.length) {
      return res.status(404).send(`Profile with ID ${req.params.id} not found`);
    }

    res.json(data[0]);
  } catch (error) {
    res.status(400).send(`Error retrieving profile ${req.params.id}: ${error}`);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    await knex("profile").update(req.body).where({ id: req.params.id });
    res.send(`Profile with id: ${req.params.id} has been updated`);
  } catch (error) {
    res.status(404).send(`Error updating profile ${req.params.id}: ${error}`);
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    await knex("profile").delete().where({ id: req.params.id });
    res.status(204).send(`Profile with id ${req.params.id} was deleted`);
  } catch (err) {
    res.status(400).send(`Error deleting profile ${req.params.id}: ${err}`);
  }
};
