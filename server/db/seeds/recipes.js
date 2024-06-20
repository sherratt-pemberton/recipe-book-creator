/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([

  { "strId": "52861",
    "strMeal":"Peanut Butter Cheesecake",
    "strCategory":"Dessert",
    "strArea":"American",
    "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qtuuys1511387068.jpg",
    "strTags":"Cake,Desert,Treat,UnHealthy,Speciality",
    "strSource":"https:\/\/www.bbcgoodfood.com\/recipes\/1759649\/peanut-butter-cheesecake",},

  { "strId":"53056",
    "strMeal":"Croatian lamb peka",
    "strCategory":"Beef",
    "strArea":"Croatian",
    "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/pn59o51628769837.jpg",
    "strTags":null,
    "strSource":"https:\/\/flawlessfood.co.uk\/croatian-lamb-peka\/",
    "strImageSource":null,
  }
  ]);
};
