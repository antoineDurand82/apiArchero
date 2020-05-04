'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.armor.create({fullName: "Vest of Dexterity", maxHp: 200, commonBuff: "+7% Dodge rate", rareBuff: "+20% Healing from red hearts", epicBuff: "Deals 80% equipment damage and applies lightning effect to nearest enemy", perfectEpicBuff: "",legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/armors/CommonVestOfDexterity.png"})
    await db.armor.create({fullName: "Phantom Cloak", maxHp: 200, commonBuff: "+10% Projectile Resistance", rareBuff: "+20% Healing from red hearts", epicBuff: "Freezes enemies who hit you for 1-2s and deals thorn damage", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/armors/CommonPhantomCloak.png"})
    await db.armor.create({fullName: "Void Robe", maxHp: 200, commonBuff: "+10% Collision Resistance", rareBuff: "+20% Healing from red hearts", epicBuff: "Applies ~18% base dmg per sec as Poison to all enemies (can be stacked with Poison Abilities)", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/armors/CommonVoidRobe.png"})
    await db.armor.create({fullName: "Golden Chestplate", maxHp: 200, commonBuff: "+5% Damage Resistance", rareBuff: "+20% Healing from red hearts", epicBuff: "Deals 5% of base damage per tick as flame damage to close enemies", perfectEpicBuff: "", legendaryBuff: "", ancientLegendaryBuff: "", linkImage: "/images/armors/GreatGoldenChestplate.png"})
  },

  down: async (queryInterface, Sequelize) => {
    const armors = await db.armor.findAll()
    for (let i = 0; i < armors.length; i++) {
      const armor = armors[i];
      await armor.destroy({force: true})
    }
  }
};
