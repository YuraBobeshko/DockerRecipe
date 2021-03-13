"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          id: 1,
          title: "",
          discribe: "",
          rating: 1,
          target: "USER",
          ModelId: 2,
          UserId: 1,
        },
        {
          id: 2,
          title: "",
          discribe: "",
          rating: 1,
          target: "USER",
          ModelId: 3,
          UserId: 1,
        },
        {
          id: 3,
          title: "",
          discribe: "",
          rating: 1,
          target: "DISH",
          ModelId: 1,
          UserId: 2,
        },
        {
          id: 4,
          title: "",
          discribe: "",
          rating: 1,
          target: "DISH",
          ModelId: 2,
          UserId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
