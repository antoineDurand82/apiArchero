// UserWeapon Model

import CustomModel from './customModel.model'

export default class UserWeapon extends CustomModel {
  
  static entity = 'userWeapons'
  static primaryKey = 'id'
  static apiPath = 'userWeapons'

  static fields () {
    return {
      id: this.number(null),
      level: this.number(0),
      rarity: this.string('Common'),
      weaponId: this.number(null),
      userId: this.number(null),
    }
  }
}