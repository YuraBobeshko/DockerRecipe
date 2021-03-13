"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DishTypes", {
      DishId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: { model: "Dishes" },
        onDelete: "CASCADE",
      },
      TypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: "CASCADE",
        references: { model: "Types" },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DishTypes");
  },
};
