/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable("employees", (table) => {
    table.increments("id").primary();
    table.string("name");
    table.integer("age");
    table.string("email");
    table.string("phone");
    table.string("address");
    table.string("city");
    table.string("state");
    table.string("country");
    table.string("zip");
    table.float("salary");
    table.string("department");
    table.string("position");
    table.boolean("is_active");
    table.date("hire_date");
    table.string("manager");
    table.string("team");
    table.integer("projects");
    table.float("bonus");
    table.boolean("on_probation");
    table.integer("dependents");
    table.string("skills");
    table.text("notes");
    table.string("emergency_contact");
    table.string("emergency_phone");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("employees");
};