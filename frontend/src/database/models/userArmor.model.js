// UserArmor Model

import CustomModel from './customModel.model'

export default class UserArmor extends CustomModel {
  
  static entity = 'userArmors'
  static primaryKey = 'id'
  static apiPath = 'userArmors'

  static fields () {
    return {
      id: this.number(null),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}