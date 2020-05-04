'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.hero.create({fullName: "Meowgik", attack: 135, maxHp: 550, firstBuff: "ttack +50 (all heroes)", secondBuff: "Dodge +5%", thirdBuff: "Attack +4% (all heroes)", fourthBuff: "Healing Effect of Red Heart +30%", linkImage: "/images/heroes/Jigsaw_Clean.png"})
    await db.hero.create({fullName: "Helix", attack: 125, maxHp: 620, firstBuff: "Critical Damage: +20% (All Heroes)", secondBuff: "Healing Effect of Red Hearts +20%", thirdBuff: "Max HP +5% (All Heroes)", fourthBuff: "Critical Hit Chance: +5%", linkImage: "/images/heroes/HelixCropped.png"})
    await db.hero.create({fullName: "Taranis", attack: 130, maxHp: 540, firstBuff: "Crit Chance +2% (All Heroes)", secondBuff: "Damage to Airborne Units +20%", thirdBuff: "Attack +4% (All Heroes)", fourthBuff: "Crit Damage +50%", linkImage: "/images/heroes/UnequipTaranisAnimationCropped.png"})
    await db.hero.create({fullName: "Phoren", attack: 130, maxHp: 500, firstBuff: "Critical Chance +2% (All Heroes)", secondBuff: "Projectile Resistance: +15%", thirdBuff: "Critical Chance +2% (All Heroes)", fourthBuff: "Critical Chance +5%", linkImage: "/images/heroes/UnequipPhorenAnimationCropped.png"})
    await db.hero.create({fullName: "Sylvan", attack: 160, maxHp: 600, firstBuff: "Max HP +200 (All Heroes)", secondBuff: "Damage to Ranged Units +20%", thirdBuff: "Attack 5% (All Heroes)", fourthBuff: "Max HP +6%", linkImage: "/images/heroes/Heroes_Promo.png"})
    await db.hero.create({fullName: "Urasil", attack: 120, maxHp: 550, firstBuff: "Attack +40 (All Heroes)", secondBuff: "Damage to Melee units: +15%", thirdBuff: "Critical Damage: +15% (All Heroes)", fourthBuff: "Max HP +6%", linkImage: "/images/heroes/UnequipUrasilAnimationCropped.png"})
    await db.hero.create({fullName: "Onir", attack: 140, maxHp: 650, firstBuff: "Max HP: +200 (all heroes)", secondBuff: "Damage to ground units +20%", thirdBuff: "Healing from red hearts +20% (all heroes)", fourthBuff: "Attack+5%", linkImage: "/images/heroes/UnequipOnirAnimationCropped.png"})
    await db.hero.create({fullName: "Atreus", attack: 150, maxHp: 600, firstBuff: "Max HP +100 (All Heroes)", secondBuff: "Damage to Ranged Units +15%", thirdBuff: "Max HP + 4% (All Heroes)", fourthBuff: "Attack Speed +5%", linkImage: "/images/heroes/UnequipAtreusAnimationCropped.png"})

  },

  down: async (queryInterface, Sequelize) => {
    const heroes = await db.hero.findAll()
    for (let i = 0; i < heroes.length; i++) {
      const hero = heroes[i];
      await hero.destroy({force: true})
    }
  }
};
