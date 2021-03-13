"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Bookmarks",
      [
        {
          UserId: 1,
          ModelId: 2,
          target: "USER",
        },
        {
          UserId: 1,
          ModelId: 3,
          target: "USER",
        },
        {
          UserId: 1,
          ModelId: 4,
          target: "USER",
        },
        {
          UserId: 1,
          ModelId: 5,
          target: "USER",
        },
        {
          UserId: 1,
          ModelId: 2,
          target: "DISH",
        },
        {
          UserId: 1,
          ModelId: 3,
          target: "DISH",
        },
        {
          UserId: 1,
          ModelId: 4,
          target: "DISH",
        },
        {
          UserId: 1,
          ModelId: 5,
          target: "DISH",
        },
        {
          UserId: 1,
          ModelId: 1,
          target: "RECIPE",
        },
        {
          UserId: 2,
          ModelId: 2,
          target: "RECIPE",
        },
        {
          UserId: 3,
          ModelId: 1,
          target: "RECIPE",
        },
        {
          UserId: 4,
          ModelId: 1,
          target: "RECIPE",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Bookmarks", null, {});
  },
};
