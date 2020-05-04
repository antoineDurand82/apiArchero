// UserLocket Model

import CustomModel from './customModel.model'

export default class UserLocket extends CustomModel {
  
  static entity = 'userLockets'
  static primaryKey = 'id'
  static apiPath = 'userLockets'

  static fields () {
    return {
      id: this.number(null),
      level: this.number(0),
      rarity: this.string('Common'),
      locketId: this.number(null),
      userId: this.number(null),
    }
  }
}