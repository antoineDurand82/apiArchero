// UserWeapon Model

import { Model } from '@vuex-orm/core'

export default class UserWeapon extends Model {
  
  static entity = 'userWeapons'
  static primaryKey = 'id'
  static apiPath = 'userWeapons'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}