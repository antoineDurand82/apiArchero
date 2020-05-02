// Locket Model

import { Model } from '@vuex-orm/core'

import User from './user.model'
import UserLocket from './userLocket.model'

export default class Locket extends Model {
  
  static entity = 'lockets'
  static primaryKey = 'id'
  static apiPath = 'lockets'

  static fields () {
    return {
      id: this.number(0),
      fullName: this.string('locket'),
      maxHp: this.number(0),
      commonBuff: this.string('commonBuff'),
      rareBuff: this.string('rareBuff'),
      epicBuff: this.string('epicBuff'),
      perfectEpicBuff: this.string('perfectEpicBuff'),
      legendaryBuff: this.string('legendaryBuff'),
      ancientLegendaryBuff: this.string('ancientLegendaryBuff'),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserLocket, 'locket_id', 'user_id'),
    }
  }
}