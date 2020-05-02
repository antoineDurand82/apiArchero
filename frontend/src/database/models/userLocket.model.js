// User Model

import { Model } from '@vuex-orm/core'

export default class User extends Model {
  
  static entity = 'users'
  static primaryKey = 'id'

  static fields () {
    return {
      id: this.number(0),
      maxHp: this.number(0),
      attack: this.number(0),
      attackSpeed: this.number(0),
      dodgeRate: this.number(0),
      damagaResistance: this.number(0),
      healingRedHearts: this.number(0),
      projectileResistance: this.number(0),
      collisionResistance: this.number(0),
      coinsDropped: this.number(0),
      criticalDamageChance: this.number(0),
      criticalDamage: this.number(0),
      angelDoubleHealingChance: this.number(0),
      ring: this.belongsToMany(Ring, UserRing, 'user_id', 'ring_id'),
      armor: this.belongsToMany(Armor, UserArmor, 'user_id', 'armor_id'),
      bracelet: this.belongsToMany(Bracelet, UserBracelet, 'user_id', 'bracelet_id'),
      hero: this.belongsToMany(Hero, UserHero, 'user_id', 'hero_id'),
      locket: this.belongsToMany(Locket, UserLocket, 'user_id', 'locket_id'),
      pet: this.belongsToMany(Pet, UserPet, 'user_id', 'pet_id'),
      talent: this.belongsToMany(Talent, UserTalent, 'user_id', 'talent_id'),
      weapon: this.belongsToMany(Weapon, UserWeapon, 'user_id', 'weapon_id'),
    }
  }
}