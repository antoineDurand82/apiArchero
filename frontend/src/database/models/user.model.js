// User Model
import CustomModel from './customModel.model'

import Ring from './ring.model'
import Armor from './armor.model'
import Bracelet from './bracelet.model'
import Hero from './hero.model'
import Locket from './locket.model'
import Pet from './pet.model'
import Talent from './talent.model'
import Weapon from './weapon.model'

import UserRing from './userRing.model'
import UserArmor from './userArmor.model'
import UserBracelet from './userBracelet.model'
import UserHero from './userHero.model'
import UserLocket from './userLocket.model'
import UserPet from './userPet.model'
import UserTalent from './userTalent.model'
import UserWeapon from './userWeapon.model'

import { map } from 'lodash'

export default class User extends CustomModel {

  static entity = 'users'
  static primaryKey = 'id'
  static apiPath = 'users'

  static fields () {
    return {
      id: this.number(null),
      maxHp: this.number(0),
      attack: this.number(0),
      attackSpeed: this.number(0),
      dodgeRate: this.number(0),
      damageResistance: this.number(0),
      healingRedHearts: this.number(0),
      projectileResistance: this.number(0),
      collisionResistance: this.number(0),
      coinsDropped: this.number(0),
      criticalDamageChance: this.number(0),
      criticalDamage: this.number(0),
      angelDoubleHealingChance: this.number(0),
      rings: this.belongsToMany(Ring, UserRing, 'userId', 'ringId'),
      armors: this.belongsToMany(Armor, UserArmor, 'userId', 'armorId'),
      bracelets: this.belongsToMany(Bracelet, UserBracelet, 'userId', 'braceletId'),
      heroes: this.belongsToMany(Hero, UserHero, 'userId', 'heroId'),
      lockets: this.belongsToMany(Locket, UserLocket, 'userId', 'locketId'),
      pets: this.belongsToMany(Pet, UserPet, 'userId', 'petId'),
      talents: this.belongsToMany(Talent, UserTalent, 'userId', 'talentId'),
      weapons: this.belongsToMany(Weapon, UserWeapon, 'userId', 'weaponId'),
    }
  }

  get ringsId() {
    return map(this.rings, ['ringId'])
  }

  get armorsId() {
    return map(this.armors, ['armorId'])
  }

  get braceletsId() {
    return map(this.bracelets, ['braceletId'])
  }

  get heroesId() {
    return map(this.heroes, ['heroId'])
  }

  get locketsId() {
    return map(this.lockets, ['locketId'])
  }

  get weaponsId() {
    return map(this.weapons, ['weaponId'])
  }

  get petsId() {
    return map(this.pets, ['petId'])
  }

  get talentsId() {
    return map(this.talents, ['talentId'])
  }
}