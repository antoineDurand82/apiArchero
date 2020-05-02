// Talent Model

import { Model } from '@vuex-orm/core'

import User from './user.model'
import UserTalent from './userTalent.model'

export default class Talent extends Model {
  
  static entity = 'talents'
  static primaryKey = 'id'
  static apiPath = 'talents'

  static fields () {
    return {
      id: this.number(0),
      fullName: this.string('talent'),
      buff: this.string('buff'),
      linkImage: this.string('@/assets/images'),
      user: this.belongsToMany(User, UserTalent, 'talent_id', 'user_id'),
    }
  }
}