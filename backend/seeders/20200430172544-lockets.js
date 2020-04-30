'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i = 0; i < 10; i++) {
      await db.locket.create({level: 10})
    }
  },

  down: async (queryInterface, Sequelize) => {
    const lockets = await db.locket.findAll()
    for (let i = 0; i < lockets.length; i++) {
      const locket = lockets[i];
      await locket.destroy({force: true})
    }
  }
};
