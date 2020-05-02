// UserArmor Model

import { Model } from '@vuex-orm/core'

export default class UserArmor extends Model {
  
  static entity = 'userArmor'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}