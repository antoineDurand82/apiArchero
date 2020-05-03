// Bracelet Model

import CustomModel from './customModel.model'

import User from './user.model'
import UserBracelet from './userBracelet.model'

export default class Bracelet extends CustomModel {
  
  static entity = 'bracelets'
  static primaryKey = 'id'
  static apiPath = 'bracelets'

  static fields () {
    return {
      id: this.number(null),
      fullName: this.string('bracelet'),
      attack: this.number(0),
      commonBuff: this.string('commonBuff'),
      rareBuff: this.string('rareBuff'),
      epicBuff: this.string('epicBuff'),
      perfectEpicBuff: this.string('perfectEpicBuff'),
      legendaryBuff: this.string('legendaryBuff'),
      ancientLegendaryBuff: this.string('ancientLegendaryBuff'),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserBracelet, 'bracelet_id', 'user_id'),
    }
  }
}