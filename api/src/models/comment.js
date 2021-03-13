"use strict";
import { Model } from "sequelize";

export default class Comment extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(120),
          allowNull: false,
        },
        discribe: DataTypes.TEXT,
        rating: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        target: {
          type: DataTypes.DataTypes.ENUM("DISH", "RECIPE", "USER"),
          allowNull: false,
        },
        ModelId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        UserId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User);
    this.belongsTo(models.Dish, {
      foreignKey: "ModelId",
      constraints: false,
      as: "dish",
    });
    this.belongsTo(models.Recipe, {
      foreignKey: "ModelId",
      constraints: false,
      as: "recipe",
    });
    this.belongsTo(models.User, {
      foreignKey: "ModelId",
      constraints: false,
      as: "user",
    });
  }
}
