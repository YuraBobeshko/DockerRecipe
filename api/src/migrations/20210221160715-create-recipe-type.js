"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("RecipeTypes", {
      RecipeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        onDelete: "CASCADE",
        references: { model: "Recipes" },
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
    await queryInterface.dropTable("RecipeTypes");
  },
};
