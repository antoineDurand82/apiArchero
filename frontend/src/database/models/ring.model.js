// Ring Model

import CustomModel from './customModel.model'

import User from './user.model'
import UserRing from './userRing.model'

export default class Ring extends CustomModel {
  
  static entity = 'rings'
  static primaryKey = 'id'
  static apiPath = 'rings'

  static fields () {
    return {
      id: this.number(null),
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