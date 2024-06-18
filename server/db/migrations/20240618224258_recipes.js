/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('meals', function(table){
        table.number("id").primary()
        table.string("meal")
        table.string("category")
        table.string("area")
        table.string("instructions")
        table.string("mealThumb")
        table.string("tags")
        table.string("ingrediant1")
        table.string("ingrediant2")
        table.string("ingrediant3")
        table.string("ingrediant4")
        table.string("ingrediant5")
        table.string("ingrediant6")
        table.string("ingrediant7")
        table.string("ingrediant8")
        table.string("ingrediant9")
        table.string("ingrediant10")
        table.string("ingrediant11")
        table.string("ingrediant12")
        table.string("ingrediant13")
        table.string("ingrediant14")
        table.string("ingrediant15")
        table.string("ingrediant16")
        table.string("ingrediant17")
        table.string("ingrediant18")
        table.string("ingrediant19")
        table.string("ingrediant20")
        table.string("measure1")
        table.string("measure2")
        table.string("measure3")
        table.string("measure4")
        table.string("measure5")
        table.string("measure6")
        table.string("measure7")
        table.string("measure8")
        table.string("measure9")
        table.string("measure10")
        table.string("measure11")
        table.string("measure12")
        table.string("measure13")
        table.string("measure14")
        table.string("measure15")
        table.string("measure16")
        table.string("measure17")
        table.string("measure18")
        table.string("measure19")
        table.string("measure20")
        table.string("source")
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('meals')
};
