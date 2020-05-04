// Hero Model

import CustomModel from './customModel.model'

import User from './user.model'
import UserHero from './userHero.model'

export default class Hero extends CustomModel {
  
  static entity = 'heroes'
  static primaryKey = 'id'
  static apiPath = 'heroes'

  static fields () {
    return {
      id: this.number(null),
      fullName: this.string('hero'),
      attack: this.number(0),
      maxHp: this.number(0),
      firstBuff: this.string('firstBuff'),
      secondBuff: this.string('secondBuff'),
      thirdBuff: this.string('thirdBuff'),
      fourthBuff: this.string('fourthBuff'),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserHero, 'hero_id', 'user_id'),
    }
  }
}