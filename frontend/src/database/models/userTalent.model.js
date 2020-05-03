// UserTalent Model

import CustomModel from './customModel.model'

export default class UserTalent extends CustomModel {
  
  static entity = 'userTalents'
  static primaryKey = 'id'
  static apiPath = 'userTalents'

  static fields () {
    return {
      id: this.number(null),
      level: this.number(0),
    }
  }
}