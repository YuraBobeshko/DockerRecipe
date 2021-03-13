"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "DishTypes",
      [
        {
          DishId: 1,
          typeId: 2,
        },
        {
          DishId: 1,
          typeId: 3,
        },
        {
          DishId: 1,
          typeId: 4,
        },
        {
          DishId: 1,
          typeId: 5,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("DishTypes", null, {});
  },
};
