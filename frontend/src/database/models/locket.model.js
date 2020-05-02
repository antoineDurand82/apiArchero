// Locket Model

import { Model } from '@vuex-orm/core'

import User from './user.model'
import UserLocket from './userLocket.model'

export default class Locket extends Model {
  
  static entity = 'locket'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      fullName: this.string(''),
      maxHp: this.number(0),
      commonBuff: this.string(''),
      rareBuff: this.string(''),
      epicBuff: this.string(''),
      perfectEpicBuff: this.string(''),
      legendaryBuff: this.string(''),
      ancientLegendaryBuff: this.string(''),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserLocket, 'locket_id', 'user_id'),
    }
  }
}