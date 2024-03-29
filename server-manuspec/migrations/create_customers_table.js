exports.up = function (knex) {
  return knex.schema
    .createTable("customers", function (table) {
      table.increments("id").primary();
      table.string("vin").notNullable();
      table.string("car");
      table.string("name").notNullable();
      table.string("phone").notNullable();
      table.string("email").notNullable().unique();
      table.dateTime("updated_at").defaultTo(knex.fn.now());
      table.dateTime("created_at").defaultTo(knex.fn.now());
    })
    .createTable("customer_files", function (table) {
      table.increments("id").primary();
      table.integer("customer_info_id").unsigned().notNullable();
      table.foreign("customer_info_id").references("customers.id");
      table.string("file_name").notNullable();
      table.dateTime("date_created").defaultTo(knex.fn.now());
      table.dateTime("updated_at").defaultTo(knex.fn.now());
      table.dateTime("created_at").defaultTo(knex.fn.now());
    })
    .createTable("profile", function (table) {
      table.increments("id").primary();
      table.integer("customer_info_id").unsigned().notNullable();
      table
        .foreign("customer_info_id")
        .references("customers.id")
        .onDelete("CASCADE");
      table.string("profile_name").notNullable();
      table.string("number").notNullable();
      table.string("tech_number").notNullable();
      table.string("email").notNullable();
      table.string("position");
      table.dateTime("date_created").defaultTo(knex.fn.now());
      table.dateTime("updated_at").defaultTo(knex.fn.now());
      table.dateTime("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable("profile")
    .dropTable("customer_files")
    .dropTable("customers");
};
