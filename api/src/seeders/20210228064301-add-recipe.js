"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Recipes",
      [
        {
          id: 1,
          name: "",
          time: 1.5,
          image: "",
          DishId: 1,
          UserId: 1,
          StepId: 1,
        },
        {
          id: 2,
          name: "",
          time: 2.5,
          image: "",
          DishId: 2,
          UserId: 1,
          StepId: 4,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Recipes", null, {});
  },
};
