"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Dishes",
      [
        {
          id: 1,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "MORNING",
          UserId: 1,
          KitchenId: 1,
        },
        {
          id: 2,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "LUNCH",
          UserId: 1,
          KitchenId: 1,
        },
        {
          id: 3,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "DINNER",
          UserId: 1,
          KitchenId: 1,
        },
        {
          id: 4,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "ALL_DAY",
          UserId: 2,
          KitchenId: 1,
        },
        {
          id: 5,
          name: "",
          image: "",
          countPerson: 1,
          timeEat: "DINNER",
          UserId: 2,
          KitchenId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};
