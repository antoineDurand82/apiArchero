'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < 10; i++) {
      await db.pet.create({level: 10})
    }
  },

  down: async (queryInterface, Sequelize) => {
    const pets = await db.pet.findAll()
    for (let i = 0; i < pets.length; i++) {
      const pet = pets[i];
      await pet.destroy({force: true})
    }
  }
};
