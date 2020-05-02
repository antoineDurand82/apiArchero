const User = require('./user.model')
const Ring = require('./ring.model')
const Armor = require('./armor.model')
const Bracelet = require('./bracelet.model')
const Hero = require('./hero.model')
const Locket = require('./locket.model')
const Pet = require('./pet.model')
const Weapon = require('./weapon.model')
const Talent = require('./talent.model')
const UserRing = require('./userRing.model')
const UserWeapon = require('./userWeapon.model')
const UserArmor = require('./userArmor.model')
const UserBracelet = require('./userBracelet.model')
const UserHero = require('./userHero.model')
const UserLocket = require('./userLocket.model')
const UserPet = require('./userPet.model')
const UserTalent = require('./userTalent.model')
const UpgradeRequirement = require('./upgradeRequirement.model')
const Database = require('./db')
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const dbConnection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: '0',
  port: dbConfig.PORT,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = new Database([
  User,
  Ring,
  Armor,
  Bracelet,
  Hero,
  Locket,
  Pet,
  Weapon,
  Talent,
  UserRing,
  UserArmor,
  UserBracelet,
  UserHero,
  UserLocket,
  UserPet,
  UserWeapon,
  UserTalent,
  UpgradeRequirement
], Sequelize, dbConnection)

db.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = db;