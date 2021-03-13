"use strict";
import { Model } from "sequelize";

export default class DishTag extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        DishId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        TagId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
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
    this.belongsTo(models.Dish);
    this.belongsTo(models.Tag);
  }
}
