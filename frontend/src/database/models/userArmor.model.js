// UserArmor Model

import { Model } from '@vuex-orm/core'

export default class UserArmor extends Model {
  
  static entity = 'userArmors'
  static primaryKey = 'id'
  static apiPath = 'userArmors'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}