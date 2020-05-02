// Ring Model

import { Model } from '@vuex-orm/core'

import User from './user.model'
import UserRing from './userRing.model'

export default class Ring extends Model {
  
  static entity = 'ring'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      fullName: this.string('fullName'),
      ringBuff: this.string('ringBuff'),
      commonBuff: this.string('commonBuff'),
      rareBuff: this.string('rareBuff'),
      epicBuff: this.string('epicBuff'),
      perfectEpicBuff: this.string('perfectEpicBuff'),
      legendaryBuff: this.string('legendaryBuff'),
      ancientLegendaryBuff: this.string('ancientLegendaryBuff'),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserRing, 'ring_id', 'user_id'),
    }
  }
}