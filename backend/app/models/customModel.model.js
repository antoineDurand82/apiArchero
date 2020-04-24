const Sequelize = require('sequelize')
const Model = Sequelize.Model

class CustomModel extends Model{
  static customInit = {}
  static customModelName = ''
  static customRelations = []
}
module.exports = CustomModel