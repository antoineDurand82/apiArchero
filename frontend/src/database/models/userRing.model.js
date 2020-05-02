// UserRing Model

import { Model } from '@vuex-orm/core'

export default class UserRing extends Model {
  
  static entity = 'userRings'
  static primaryKey = 'id'
  static apiPath = 'userRings'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}