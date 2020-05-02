// Armor Model

import { Model } from '@vuex-orm/core'
import User from './user.model'
import UserArmor from './userArmor.model'

export default class Armor extends Model {
  
  static entity = 'armor'
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
      user: this.belongsToMany(User, UserArmor, 'armor_id', 'user_id')
    }
  }
}