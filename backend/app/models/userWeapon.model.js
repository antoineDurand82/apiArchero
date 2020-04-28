const Sequelize = require('sequelize')
const CustomModel = require('./customModel.model')
const DataTypes = Sequelize.DataTypes

class UserWeapon extends CustomModel{
  static customInit = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Common"
    }
  }
  static customModelName = 'userWeapon'
}
module.exports = UserWeapon