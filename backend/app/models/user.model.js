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
      allowNull: false
    }
  }
  static customModelName = 'user'
  static customRelations = [
    {
      type: 'belongsToMany',
      targetModel: 'ring',
      throughModel: 'userRing',
      options: {}
    },
    {
      type: 'belongsToMany',
      targetModel: 'armor',
      throughModel: 'userArmor',
      options: {}
    },
    {
      type: 'belongsToMany',
      targetModel: 'bracelet',
      throughModel: 'userBracelet',
      options: {}
    },
    {
      type: 'belongsToMany',
      targetModel: 'hero',
      throughModel: 'userHero',
      options: {}
    },
    {
      type: 'belongsToMany',
      targetModel: 'locket',
      throughModel: 'userLocket',
      options: {}
    },
    {
      type: 'belongsToMany',
      targetModel: 'pet',
      throughModel: 'userPet',
      options: {}
    },
    {
      type: 'belongsToMany',
      targetModel: 'talent',
      throughModel: 'userTalent',
      options: {}
    },
    {
      type: 'belongsToMany',
      targetModel: 'weapon',
      throughModel: 'userWeapon',
      options: {}
    }
  ]
}
module.exports = User