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
      rings: this.belongsToMany(Ring, UserRing, 'user_id', 'ring_id'),
      armor: this.belongsToMany(Armor, UserArmor, 'user_id', 'armor_id'),
      bracelet: this.belongsToMany(Bracelet, UserBracelet, 'user_id', 'bracelet_id'),
      hero: this.belongsToMany(Hero, UserHero, 'user_id', 'hero_id'),
      locket: this.belongsToMany(Locket, UserLocket, 'user_id', 'locket_id'),
      pets: this.belongsToMany(Pet, UserPet, 'user_id', 'pet_id'),
      talents: this.belongsToMany(Talent, UserTalent, 'user_id', 'talent_id'),
      weapon: this.belongsToMany(Weapon, UserWeapon, 'user_id', 'weapon_id'),
    }
  }

  get ringsId() {
    return map(this.rings, ['ring_id'])
  }

  get armorId() {
    return map(this.armor, ['armor_id'])
  }

  get braceletId() {
    return map(this.bracelet, ['bracelet_id'])
  }

  get heroId() {
    return map(this.hero, ['hero_id'])
  }

  get locketId() {
    return map(this.locket, ['locket_id'])
  }

  get weaponId() {
    return map(this.weapon, ['weapon_id'])
  }

  get petsId() {
    return map(this.pets, ['pet_id'])
  }

  get talentsId() {
    return map(this.talents, ['talent_id'])
  }
}