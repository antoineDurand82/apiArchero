// UpgradeRequirements Model

import { Model } from '@vuex-orm/core'


export default class UpgradeRequirement extends Model {
  
  static entity = 'upgradeRequirements'
  static primaryKey = 'id'
  static apiPath = 'upgradeRequirements'

  static fields () {
    return {
      id: this.number(0),
      level: this.number(0),
      gold: this.number(0),
      cumGold: this.number(0),
      cumScrolls: this.number(0),
    }
  }
}