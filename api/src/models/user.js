"use strict";
import { Model } from "sequelize";

export default class User extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        firstName: { type: DataTypes.STRING(30), allowNull: false },
        lastName: { type: DataTypes.STRING(30), allowNull: false },
        email: {
          type: DataTypes.STRING(80),
          unique: true,
          validate: {
            isEmail: true,
          },
          allowNull: false,
        },
        authKey: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        passwordHash: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        avatar: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Dish);
    this.hasMany(models.Recipe);
    this.hasMany(models.Bookmark);
    this.hasMany(models.Bookmark, {
      foreignKey: "ModelId",
      constraints: false,
      scope: {
        target: "USER",
      },
      as: "user",
    });
    this.hasMany(models.Comment, {
      foreignKey: "ModelId",
      constraints: false,
      scope: {
        target: "USER",
      },
    });
    this.belongsToMany(models.User, {
      through: {
        model: "Bookmark",
        unique: false,
        scope: {
          target: "USER",
        },
      },
      as: "selected",
      constraints: false,
      foreignKey: "ModelId",
    });
    this.belongsToMany(models.User, {
      through: "Bookmark",
      as: "selector",
      constraints: false,
    });
    this.belongsToMany(models.Dish, {
      through: {
        model: "Bookmark",
        unique: false,
        scope: {
          target: "DISH",
        },
      },
      constraints: false,
    });
    this.belongsToMany(models.Recipe, {
      through: {
        model: "Bookmark",
        unique: false,
        scope: {
          target: "RECIPE",
        },
      },
      constraints: false,
    });
  }
}
