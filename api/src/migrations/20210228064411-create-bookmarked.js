"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bookmarks", {
      target: {
        type: Sequelize.ENUM("DISH", "RECIPE", "USER"),
        primaryKey: true,
        allowNull: false,
      },
      UserId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onDelete: "CASCADE",
        references: { model: "Users" },
      },
      ModelId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bookmarks");
  },
};
