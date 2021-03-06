// Weapon Model

import CustomModel from './customModel.model'

import User from './user.model'
import UserWeapon from './userWeapon.model'

export default class Weapon extends CustomModel {
  
  static entity = 'weapons'
  static primaryKey = 'id'
  static apiPath = 'weapons'

  static fields () {
    return {
      id: this.number(null),
      fullName: this.string('weapon'),
      attack: this.number(0),
      attackSpeed: this.number(0),
      rareBuff: this.string('rareBuff'),
      epicBuff: this.string('epicBuff'),
      perfectEpicBuff: this.string('perfectEpicBuff'),
      legendaryBuff: this.string('legendaryBuff'),
      ancientLegendaryBuff: this.string('ancientLegendaryBuff'),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserWeapon, 'weapon_id', 'user_id'),
    }
  }
}