// UserPet Model

import { Model } from '@vuex-orm/core'

export default class UserPet extends Model {
  
  static entity = 'userPet'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}