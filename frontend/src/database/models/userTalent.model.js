// UserTalent Model

import { Model } from '@vuex-orm/core'

export default class UserTalent extends Model {
  
  static entity = 'userTalent'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
    }
  }
}