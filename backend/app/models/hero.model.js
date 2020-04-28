const Sequelize = require('sequelize')
const CustomModel = require('./customModel.model')
const DataTypes = Sequelize.DataTypes

class Hero extends CustomModel{
  static customInit = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "hero"
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 0
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    maxHp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    firstBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "firstBuff"
    },
    secondBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "secondBuff"
    },
    thirdBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "thirdBuff"
    },
    fourthBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "fourthBuff"
    },
    linkImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No link found"
    },
  }
  static customModelName = 'hero'
  static customRelations = [
    {
        type: 'belongsToMany',
        targetModel: 'user',
        throughModel: 'userHero',
        options: {}
    }
  ]
}
module.exports = Hero