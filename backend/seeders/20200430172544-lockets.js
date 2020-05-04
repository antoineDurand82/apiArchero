'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.locket.create({fullName: "Agile Locket", maxHp: 120, commonBuff: "When HP is lower than 20%, Dodge increases by 8%", rareBuff: "When HP is lower than 20%, Dodge increases by 12%", epicBuff: "When HP is lower than 20%, Dodge increases by 15% | Chance of 2x Angel Healing + 30%", perfectEpicBuff: "When HP is lower than 20%, Dodge increases by 18%", legendaryBuff: "When HP is lower than 20%, Dodge increases by 20%", ancientLegendaryBuff: "", linkImage: "/images/lockets/locketScroll.png"})
    await db.locket.create({fullName: "Angel Locket", maxHp: 120, commonBuff: "There is a 20% chance to revive and be invincible for 1s when dying; available once only", rareBuff: "	There is a 20% chance to revive and be invincible for 1s when dying; available once only", epicBuff: "There is a 25% chance to revive and be invincible for 2s when dying; available once only | Chance of 2x Angel Healing + 30%", perfectEpicBuff: "There is a 25% chance to revive and be invincible for 3s when dying; available once only", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/lockets/locketScroll.png"})
    await db.locket.create({fullName: "Bulletproof Locket", maxHp: 120, commonBuff: "Projectile damage is reduced by 10% when HP is lower than 20%", rareBuff: "Projectile damage is reduced by 15% when HP is lower than 20%", epicBuff: "	Projectile damage is reduced by 20% when HP is lower than 20% | Chance of 2x Angel Healing + 30%", perfectEpicBuff: "Projectile damage is reduced by 22% when HP is lower than 20%", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/lockets/locketScroll.png"})
    await db.locket.create({fullName: "Iron Locket", maxHp: 120, commonBuff: "When HP is lower than 20%, damage dealt by bumping into enemies is reduced by 15%", rareBuff: "When HP is lower than 20%, damage dealt by bumping into enemies is reduced by 15%", epicBuff: "When HP is lower than 20%, damage dealt by bumping into enemies is reduced by 20% | Chance of 2x Angel Healing + 30%", perfectEpicBuff: "When HP is lower than 20%, damage dealt by bumping into enemies is reduced by 22%", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/lockets/CommonIronLocket.png"})
  },

  down: async (queryInterface, Sequelize) => {
    const lockets = await db.locket.findAll()
    for (let i = 0; i < lockets.length; i++) {
      const locket = lockets[i];
      await locket.destroy({force: true})
    }
  }
};
