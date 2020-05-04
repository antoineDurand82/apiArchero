// UpgradeRequirements Model

import CustomModel from './customModel.model'


export default class UpgradeRequirement extends CustomModel {
  
  static entity = 'upgradeRequirements'
  static primaryKey = 'id'
  static apiPath = 'upgradeRequirements'

  static fields () {
    return {
      id: this.number(null),
      level: this.number(0),
      gold: this.number(0),
      cumGold: this.number(0),
      cumScrolls: this.number(0),
    }
  }
}