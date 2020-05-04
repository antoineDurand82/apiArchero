// UserRing Model

import CustomModel from './customModel.model'

export default class UserRing extends CustomModel {
  
  static entity = 'userRings'
  static primaryKey = 'id'
  static apiPath = 'userRings'

  static fields () {
    return {
      id: this.number(null),
      level: this.number(0),
      rarity: this.string('Common'),
      ringId: this.number(null),
      userId: this.number(null),
    }
  }
}