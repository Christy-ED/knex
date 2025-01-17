/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('temperature', (table) => {
    table.increments('id').primary();
    table.string('city').notNullable();
    table.float('temperature').notNullable();
    table.timestamp('recorded_at').defaultTo(knex.fn.now());
});
};



/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
return knex.schema.dropTableIfExists("temperature");
};
