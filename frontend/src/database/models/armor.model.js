// Armor Model

import { Model } from '@vuex-orm/core'
import User from './user.model'
import UserArmor from './userArmor.model'

export default class Armor extends Model {
  
  static entity = 'armors'
  static primaryKey = 'id'
  static apiPath = 'armors'

  static fields () {
    return {
      id: this.number(0),
      fullName: this.string('armor'),
      maxHp: this.number(0),
      commonBuff: this.string('commonBuff'),
      rareBuff: this.string('rareBuff'),
      epicBuff: this.string('epicBuff'),
      perfectEpicBuff: this.string('perfectEpicBuff'),
      legendaryBuff: this.string('legendaryBuff'),
      ancientLegendaryBuff: this.string('ancientLegendaryBuff'),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserArmor, 'armor_id', 'user_id')
    }
  }
}