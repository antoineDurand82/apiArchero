// UserHero Model

import CustomModel from './customModel.model'

export default class UserHero extends CustomModel {
  
  static entity = 'userHeroes'
  static primaryKey = 'id'
  static apiPath = 'userHeroes'

  static fields () {
    return {
      id: this.number(null),
      level: this.number(0),
    }
  }
}