const Sequelize = require('sequelize')
const CustomModel = require('./customModel.model')
const DataTypes = Sequelize.DataTypes

class Locket extends CustomModel{
  static customInit = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "locket"
    },
    maxHp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    commonBuff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "commonBuff"
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
  static customModelName = 'locket'
  static customRelations = [
    {
        type: 'belongsToMany',
        targetModel: 'user',
        throughModel: 'userLocket',
        options: {}
    }
  ]
}
module.exports = Locket