// Talent Model

import CustomModel from './customModel.model'

import User from './user.model'
import UserTalent from './userTalent.model'

export default class Talent extends CustomModel {
  
  static entity = 'talents'
  static primaryKey = 'id'
  static apiPath = 'talents'

  static fields () {
    return {
      id: this.number(null),
      fullName: this.string('talent'),
      buff: this.string('buff'),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserTalent, 'talent_id', 'user_id'),
    }
  }
}