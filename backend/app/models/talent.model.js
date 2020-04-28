const Sequelize = require('sequelize')
const CustomModel = require('./customModel.model')
const DataTypes = Sequelize.DataTypes

class Talent extends CustomModel{
  static customInit = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "talent"
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    buff: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "buff"
    },
    linkImage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No link found"
    },
  }
  static customModelName = 'talent'
  static customRelations = [
    {
        type: 'belongsToMany',
        targetModel: 'user',
        throughModel: 'userTalent',
        options: {}
    }
  ]
}
module.exports = Talent