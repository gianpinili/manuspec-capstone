//import seed data files, ararys of objects
const customersData = require("../seed_data/customers");
const customerProfileData = require("../seed_data/customer_file");
const profileData = require("../seed_data/profile");

exports.seed = async function (knex) {
  await knex("customers").del();
  await knex("customers").insert(customersData);
  await knex("customer_files").del();
  await knex("customer_files").insert(customerProfileData);
  await knex("profile").del();
  await knex("profile").insert(profileData);
};
