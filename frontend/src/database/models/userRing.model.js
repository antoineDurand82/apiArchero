// UserRing Model

import { Model } from '@vuex-orm/core'

export default class UserRing extends Model {
  
  static entity = 'userRing'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}