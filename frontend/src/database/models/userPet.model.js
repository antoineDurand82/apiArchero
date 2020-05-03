// UserPet Model

import CustomModel from './customModel.model'

export default class UserPet extends CustomModel {
  
  static entity = 'userPets'
  static primaryKey = 'id'
  static apiPath = 'userPets'

  static fields () {
    return {
      id: this.number(null),
      level: this.number(0),
      rarity: this.string('Common'),
    }
  }
}