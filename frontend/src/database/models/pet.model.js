// Pet Model

import CustomModel from './customModel.model'

import User from './user.model'
import UserPet from './userPet.model'

export default class Pet extends CustomModel {
  
  static entity = 'pets'
  static primaryKey = 'id'
  static apiPath = 'pets'

  static fields () {
    return {
      id: this.number(null),
      fullName: this.string('pet'),
      commonBuff: this.string('commonBuff'),
      rareBuff: this.string('rareBuff'),
      epicBuff: this.string('epicBuff'),
      perfectEpicBuff: this.string('perfectEpicBuff'),
      legendaryBuff: this.string('legendaryBuff'),
      ancientLegendaryBuff: this.string('ancientLegendaryBuff'),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserPet, 'pet_id', 'user_id'),
    }
  }
}