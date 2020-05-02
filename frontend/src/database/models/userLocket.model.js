// UserLocket Model

import { Model } from '@vuex-orm/core'

export default class UserLocket extends Model {
  
  static entity = 'userLockets'
  static primaryKey = 'id'
  static apiPath = 'userLockets'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}