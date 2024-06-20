/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('meals', function(table){
        table.string("strId").primary()
        table.string("strMeal")
        table.string("strCategory")
        table.string("strArea")
        table.string("strMealThumb")
        table.string("strTags")
        table.string("strSource")
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('meals')
};
