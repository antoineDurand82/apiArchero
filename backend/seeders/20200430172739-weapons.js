'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.weapon.create({fullName: "Brave Bow", attack: 100, attackSpeed: 100, rareBuff: "Attack + 5 %", epicBuff: "Crit damage + 50%", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/weapons/Common_Brave_Bow.png"})
    await db.weapon.create({fullName: "Death Scythe", attack: 145, attackSpeed: 85, rareBuff: "Attack + 5 %", epicBuff: "50% chance to kill enemies with less than 30% hp", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/weapons/CommonDeathScythe.png"})
    await db.weapon.create({fullName: "Saw Blade", attack: 80, attackSpeed: 120, rareBuff: "Attack + 5 %", epicBuff: "Increases your attack speed (by ~15%) for 3 seconds after entering a room", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/weapons/CommonSawBlade.png"})
    await db.weapon.create({fullName: "Tornado", attack: 80, attackSpeed: 100, rareBuff: "Attack + 5 %", epicBuff: "Causes more damage when returning to player", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/weapons/CommonTornado.png"})
    await db.weapon.create({fullName: "Brightspear", attack: 120, attackSpeed: 95, rareBuff: "Attack + 5 %", epicBuff: "When attacking a similar target (same monster), damage dealt will increase", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/weapons/Brightspear1.png"})
    await db.weapon.create({fullName: "Stalker Staff", attack: 100, attackSpeed: 115, rareBuff: "Attack + 5 %", epicBuff: "The lower the target's HP, the higher is the critical chance", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/weapons/Stalkerstaff.png"})
  },

  down: async (queryInterface, Sequelize) => {
    const weapons = await db.weapon.findAll()
    for (let i = 0; i < weapons.length; i++) {
      const weapon = weapons[i];
      await weapon.destroy({force: true})
    }
  }
};
