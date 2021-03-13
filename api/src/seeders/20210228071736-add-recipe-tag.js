"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "RecipeTags",
      [
        {
          RecipeId: 1,
          TagId: 2,
        },
        {
          RecipeId: 1,
          TagId: 3,
        },
        {
          RecipeId: 1,
          TagId: 4,
        },
        {
          RecipeId: 1,
          TagId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("RecipeTags", null, {});
  },
};
