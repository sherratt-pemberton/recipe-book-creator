/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([

  { "id": 52861,
    "meal":"Peanut Butter Cheesecake",
    "category":"Dessert",
    "area":"American",
    "instructions":"Oil and line a 20cm round loose- bottomed cake tin with cling film, making it as smooth as possible. Melt the butter in a pan. Crush the biscuits by bashing them in a bag with a rolling pin, then stir them into the butter until very well coated. Press the mixture firmly into the base of the tin and chill.\r\nSoak the gelatine in water while you make the filling. Tip the ricotta into a bowl, then beat in the peanut butter and syrup. Ricotta has a slightly grainy texture so blitz until smooth with a stick blender for a smoother texture if you prefer.\r\nTake the soaked gelatine from the water and squeeze dry. Put it into a pan with the milk and heat very gently until the gelatine dissolves. Beat into the peanut mixture, then tip onto the biscuit base. Chill until set.\r\nTo freeze, leave in the tin and as soon as it is solid, cover the surface with cling film, then wrap the tin with cling film and foil.\r\nTo defrost, thaw in the fridge overnight.\r\nTo serve, carefully remove from the tin. Whisk the cream with the sugar until it holds its shape, then spread on top of the cheesecake and scatter with the peanut brittle.",
    "mealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/qtuuys1511387068.jpg",
    "tags":"Cake,Desert,Treat,UnHealthy,Speciality",
    "ingrediant1":"Butter",
    "ingrediant2":"Peanut Cookies",
    "ingrediant3":"Gelatine Leafs",
    "ingrediant4":"Ricotta",
    "ingrediant5":"Peanut Butter",
    "ingrediant6":"Golden Syrup",
    "ingrediant7":"Milk",
    "ingrediant8":"Double Cream",
    "ingrediant9":"Light Brown Soft Sugar",
    "ingrediant10":"Peanut Brittle",
    "measure1":"50g",
    "measure2":"175g",
    "measure3":"5",
    "measure4":"500g",
    "measure5":"175g",
    "measure6":"175g",
    "measure7":"150ml",
    "measure8":"275ml",
    "measure9":"2 tblsp ",
    "measure10":"Crushed",
    "strSource":"https:\/\/www.bbcgoodfood.com\/recipes\/1759649\/peanut-butter-cheesecake",
    "strImageSource":null,
    "strCreativeCommonsConfirmed":null,
    "dateModified":null}
  ]);
};
