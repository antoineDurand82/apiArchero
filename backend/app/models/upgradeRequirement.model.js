const Sequelize = require('sequelize')
const CustomModel = require('./customModel.model')
const DataTypes = Sequelize.DataTypes

class UpgradeRequirement extends CustomModel{
  static customInit = {
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    gold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    scrolls: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cumGold: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cumScrolls: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
  }
  static customModelName = 'upgradeRequirement'
}
module.exports = UpgradeRequirement