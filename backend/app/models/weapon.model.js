const Sequelize = require('sequelize')
const CustomModel = require('./customModel.model')
const DataTypes = Sequelize.DataTypes

class Weapon extends CustomModel{
  static customInit = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "weapon"
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    attackSpeed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
    rareBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "rareBuff"
    },
    epicBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "epicBuff"
    },
    perfectEpicBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "perfectEpicBuff"
    },
    legendaryBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "legendaryBuff"
    },
    ancientLegendaryBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "ancientLegendaryBuff"
    },
    linkImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No link found"
    },
  }
  static customModelName = 'weapon'
  static customRelations = [
    {
        type: 'belongsToMany',
        targetModel: 'user',
        throughModel: 'userWeapon',
        options: {}
    }
  ]
}
module.exports = Weapon