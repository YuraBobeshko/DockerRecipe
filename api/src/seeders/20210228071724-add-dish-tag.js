"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "DishTags",
      [
        {
          DishId: 1,
          TagId: 2,
        },
        {
          DishId: 1,
          TagId: 3,
        },
        {
          DishId: 1,
          TagId: 4,
        },
        {
          DishId: 1,
          TagId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("DishTags", null, {});
  },
};
