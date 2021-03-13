"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "DishTags",
      {
        DishId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          onDelete: "CASCADE",
          references: { model: "Dishes" },
        },
        TagId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          onDelete: "CASCADE",
          references: { model: "Tags" },
        },
      },
      {
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DishTags");
  },
};
