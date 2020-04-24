const Sequelize = require('sequelize')
const CustomModel = require('./customModel.model')
const DataTypes = Sequelize.DataTypes

class User extends CustomModel{
  static customInit = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    maxHP: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
  static customModelName = 'user'
  static customRelations = [
    {
      type: 'belongsToMany',
      targetModel: 'ring',
      throughModel: 'userRing',
      options: {}
    }
  ]
}
module.exports = User