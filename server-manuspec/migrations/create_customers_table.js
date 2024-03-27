exports.up = function (knex) {
  return knex.schema.createTable("customers", function (table) {
    table.increments("id").primary();
    table.string("vehicle_identification_number").notNullable();
    table.string("car_type");
    table.string("phone_number").notNullable();
    table.string("email").notNullable().unique();
    table.string("customer_name").notNullable();
    table.timestamps("updated_at").defaultTo(knex.fn.now());
  });
  // .createTable("customer_files", function (table) {
  //   table.increments("id").primary();
  //   table.integer("customer_id").unsigned().notNullable();
  //   table
  //     .foreign("customer_id")
  //     .references("customers.id")
  //     .onDelete("CASCADE");
  //   table.string("file_name").notNullable();
  //   table.dateTime("date_created").defaultTo(knex.fn.now());
  //   table.timestamps("updated_at").defaultTo(knex.fn.now());
  // })
  // .createTable("profile", function (table) {
  //   table.increments("report_id").primary();
  //   table.integer("customer_id").unsigned().notNullable();
  //   table
  //     .foreign("customer_id")
  //     .references("customers.id")
  //     .onDelete("CASCADE");
  //   table.string("report_name").notNullable();
  //   table.dateTime("date_created").defaultTo(knex.fn.now());
  //   table.timestamps("updated_at").defaultTo(knex.fn.now());
  // });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("profile");
  // .dropTableIfExists("customer_files")
  // .dropTableIfExists("customers");
};
