'use strict';
const db = require('../app/models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // for(let i = 0; i < 10; i++) {
    //   await db.user.create({maxHP: 0})
    // }
  },

  down: async (queryInterface, Sequelize) => {
    // const users = await db.user.findAll()
    // for (let i = 0; i < users.length; i++) {
    //   const user = users[i];
    //   await user.destroy({force: true})
    // }
  }
};
