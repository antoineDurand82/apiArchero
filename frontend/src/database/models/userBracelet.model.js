// UserBracelet Model

import { Model } from '@vuex-orm/core'

export default class UserBracelet extends Model {
  
  static entity = 'userBracelets'
  static primaryKey = 'id'
  static apiPath = 'userBracelets'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}