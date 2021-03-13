"use strict";
import { Model } from "sequelize";

export default class Dish extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        countPerson: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        timeEat: DataTypes.ENUM("MORNING", "LUNCH", "DINNER", "ALL_DAY"),
        UserId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        KitchenId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Kitchen);
    this.belongsTo(models.User);
    this.hasMany(models.DishTag);
    this.hasMany(models.DishType);
    this.hasMany(models.Recipe);
    this.hasMany(models.Comment, {
      foreignKey: "ModelId",
      constraints: false,
      scope: {
        target: "DISH",
      },
    });
    this.hasMany(models.Bookmark, {
      foreignKey: "ModelId",
      constraints: false,
      scope: {
        target: "DISH",
      },
    });
    this.belongsToMany(models.Tag, { through: "DishTag" });
    this.belongsToMany(models.Type, { through: "DishType" });
    this.belongsToMany(models.User, {
      through: {
        model: "Bookmark",
        unique: false,
        scope: {
          target: "DISH",
        },
      },
      constraints: false,
      foreignKey: "ModelId",
    });
  }
}
