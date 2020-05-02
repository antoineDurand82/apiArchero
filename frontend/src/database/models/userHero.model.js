// UserHero Model

import { Model } from '@vuex-orm/core'

export default class UserHero extends Model {
  
  static entity = 'userHero'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
    }
  }
}