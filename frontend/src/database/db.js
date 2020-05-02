import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import VuexORMRest from 'vuex-orm-rest'

import Datatable from './datatable'
import User from './models/user.model'
import Armor from './models/armor.model'
import Bracelet from './models/bracelet.model'
import Hero from './models/hero.model'
import Locket from './models/locket.model'
import Pet from './models/pet.model'
import Ring from './models/ring.model'
import Talent from './models/talent.model'
import UpgradeRequirement from './models/upgradeRequirement.model'
import UserArmor from './models/userArmor.model'
import UserBracelet from './models/userBracelet.model'
import UserHero from './models/userHero.model'
import UserLocket from './models/userLocket.model'
import UserPet from './models/userPet.model'
import UserRing from './models/userRing.model'
import UserTalent from './models/userTalent.model'
import UserWeapon from './models/userWeapon.model'
import Weapon from './models/weapon.model'

const client = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

Vue.use(Vuex)
VuexORM.use(VuexORMRest, { client })

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(User)
database.register(Armor)
database.register(Bracelet)
database.register(Hero)
database.register(Locket)
database.register(Pet)
database.register(Ring)
database.register(Talent)
database.register(UpgradeRequirement)
database.register(UserArmor)
database.register(UserBracelet)
database.register(UserHero)
database.register(UserLocket)
database.register(UserPet)
database.register(UserRing)
database.register(UserTalent)
database.register(UserWeapon)
database.register(Weapon)
// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)],
  modules: {
    datatable: Datatable
  }
})

export default store


