// Bracelet Model

import { Model } from '@vuex-orm/core'

import User from './user.model'
import UserBracelet from './userBracelet.model'

export default class Bracelet extends Model {
  
  static entity = 'bracelet'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      fullName: this.string(''),
      attack: this.number(0),
      commonBuff: this.string(''),
      rareBuff: this.string(''),
      epicBuff: this.string(''),
      perfectEpicBuff: this.string(''),
      legendaryBuff: this.string(''),
      ancientLegendaryBuff: this.string(''),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserBracelet, 'bracelet_id', 'user_id'),
    }
  }
}