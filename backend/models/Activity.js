import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Activity = sequelize.define(
  "Activity",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    startTime: { type: DataTypes.DATE, allowNull: false },
    endTime: { type: DataTypes.DATE, allowNull: false },
  },
  { timestamps: true }
);

export default Activity;
