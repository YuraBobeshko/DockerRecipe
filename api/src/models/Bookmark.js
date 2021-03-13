"use strict";

import { Model } from "sequelize";

export default class Bookmark extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        target: {
          type: DataTypes.ENUM("DISH", "RECIPE", "USER"),
          primaryKey: true,
          allowNull: false,
        },
        UserId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
        ModelId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User);
    this.belongsTo(models.Recipe, {
      foreignKey: "ModelId",
      constraints: false,
      as: "recipe",
    });
    this.belongsTo(models.Dish, {
      foreignKey: "ModelId",
      constraints: false,
      as: "dish",
    });
    this.belongsTo(models.User, {
      foreignKey: "ModelId",
      constraints: false,
      as: "selected",
    });
  }
}
