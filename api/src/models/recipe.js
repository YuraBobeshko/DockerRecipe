"use strict";
import { Model } from "sequelize";

export default class Recipe extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        time: DataTypes.FLOAT,
        image: DataTypes.STRING,
        DishId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        UserId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        StepId: DataTypes.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Dish);
    this.belongsTo(models.User);
    this.belongsTo(models.Step);
    this.hasMany(models.RecipeTag);
    this.hasMany(models.RecipeType);
    this.hasMany(models.Comment, {
      foreignKey: "ModelId",
      constraints: false,
      scope: {
        target: "RECIPE",
      },
    });
    this.belongsToMany(models.Tag, {
      through: models.RecipeTag,
    });
    this.belongsToMany(models.Type, {
      through: models.RecipeType,
    });
    this.belongsToMany(models.User, {
      through: {
        model: "Bookmark",
        unique: false,
        scope: {
          target: "RECIPE",
        },
      },
      constraints: false,
      foreignKey: "ModelId",
    });
  }
}
