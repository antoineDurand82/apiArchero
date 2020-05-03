// UserBracelet Model

import CustomModel from './customModel.model'

export default class UserBracelet extends CustomModel {
  
  static entity = 'userBracelets'
  static primaryKey = 'id'
  static apiPath = 'userBracelets'

  static fields () {
    return {
      id: this.number(null),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}