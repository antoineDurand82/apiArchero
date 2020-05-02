// Hero Model

import { Model } from '@vuex-orm/core'

import User from './user.model'
import UserHero from './userHero.model'

export default class Hero extends Model {
  
  static entity = 'hero'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      fullName: this.string(''),
      attack: this.number(0),
      maxHp: this.number(0),
      firstBuff: this.string(''),
      secondBuff: this.string(''),
      thirdBuff: this.string(''),
      fourthBuff: this.string(''),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserHero, 'hero_id', 'user_id'),
    }
  }
}