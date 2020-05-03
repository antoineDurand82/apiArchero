import Ring from './models/ring.model'
import Armor from './models/armor.model'
import Bracelet from './models/bracelet.model'
import Hero from './models/hero.model'
import Locket from './models/locket.model'
import Pet from './models/pet.model'
import Talent from './models/talent.model'
import Weapon from './models/weapon.model'

// import UserRing from './models/userRing.model'
// import UserArmor from './models/userArmor.model'
// import UserBracelet from './models/userBracelet.model'
// import UserHero from './models/userHero.model'
// import UserLocket from './models/userLocket.model'
// import UserPet from './models/userPet.model'
// import UserTalent from './models/userTalent.model'
// import UserWeapon from './models/userWeapon.model'


export default Users = {
  columns: [
    {
      'key': 'id',
      'name': 'User ID'
    },
    {
      'key': 'maxHp',
      'name': 'Max HP'
    },
    {
      'key': 'attack',
      'name': 'Attack'
    },
    {
      'key': 'attackSpeed',
      'name': 'Attack Speed %'
    },
    {
      'key': 'dodgeRate',
      'name': 'Dodge Rate %'
    },
    {
      'key': 'damageResistance',
      'name': 'Damage Resistance %'
    },
    {
      'key': 'healingRedHearts',
      'name': 'Healing From Red Hearts %'
    },
    {
      'key': 'projectileResistance',
      'name': 'Projectile Resistance %'
    },
    {
      'key': 'collisionResistance',
      'name': 'Collision Resistance %'
    },
    {
      'key': 'coinsDropped',
      'name': 'Coins Dropped %'
    },
    {
      'key': 'criticalDamageChance',
      'name': 'Critical Chance %'
    },
    {
      'key': 'criticalDamage',
      'name': 'Critical Damage %'
    },
    {
      'key': 'angelDoubleHealingChance',
      'name': 'Double Healing Chance %'
    },
  ],

  form: {
    name: 'User',
    display: 'id',
    fields: [
      {
        key: 'rings',
        addValue: () => ({pivot:{ring_id: null}}),
        setValue: (oldVal, newVal, index, key) => {
          oldVal[index].pivot[key] = newVal
          return oldVal
        },
        children: [
          {
            key: 'ring_id',
            label: 'Ring',
            type: 'select',
            options: {
              options: () => {
                return Ring.all()
              },
              display: 'fullName',
              displayId: 'id',
              optionValue: 'id'
            }
          },
          {
            key: 'level',
            label: 'Ring Level',
            type: 'number',
            options: {
              min: 1
            }
          },
        ],
        prefix: 'pivot',
        add: true,
        limit: 2,
        label: 'Ring'
      }
      {
        key: 'armorId',
        label: 'Armor',
        type: 'select',
        options: {
          options: async () => {
            await Armor.fetchAll()
            return Armor.all()
          },
          display: 'fullName',
          displayId: 'id',
          optionValue: 'id'
        }
      },
      {
        key: 'braceletId',
        label: 'Bracelet',
        type: 'select',
        options: {
          options: async () => {
            await Bracelet.fetchAll()
            return Bracelet.all()
          },
          display: 'fullName',
          displayId: 'id',
          optionValue: 'id'
        }
      },
      {
        key: 'heroId',
        label: 'Hero',
        type: 'select',
        options: {
          options: async () => {
            await Hero.fetchAll()
            return Hero.all()
          },
          display: 'fullName',
          displayId: 'id',
          optionValue: 'id'
        }
      },
      {
        key: 'locketId',
        label: 'Locket',
        type: 'select',
        options: {
          options: async () => {
            await Locket.fetchAll()
            return Locket.all()
          },
          display: 'fullName',
          displayId: 'id',
          optionValue: 'id'
        }
      },
      {
        key: 'petsId',
        label: 'Pets',
        type: 'select',
        options: {
          options: async () => {
            await Pet.fetchAll()
            return Pet.all()
          },
          display: 'fullName',
          displayId: 'id',
          optionValue: 'id'
        }
      },
      {
        key: 'talentsId',
        label: 'Talents',
        type: 'select',
        options: {
          options: async () => {
            await Talent.fetchAll()
            return Talent.all()
          },
          display: 'fullName',
          displayId: 'id',
          optionValue: 'id'
        }
      },
      {
        key: 'weaponId',
        label: 'Weapon',
        type: 'select',
        options: {
          options: async () => {
            await Weapon.fetchAll()
            return Weapon.all()
          },
          display: 'fullName',
          displayId: 'id',
          optionValue: 'id'
        }
      },
    ],
  },
  beforeLoad: async () => {
    await Ring.fetchAll()
    await Armor.fetchAll()
    await Bracelet.fetchAll()
    await Hero.fetchAll()
    await Locket.fetchAll()
    await Pet.fetchAll()
    await Talent.fetchAll()
    await Weapon.fetchAll()
    // await UserRing.fetchAll()
    // await UserArmor.fetchAll()
    // await UserBracelet.fetchAll()
    // await UserHero.fetchAll()
    // await UserLocket.fetchAll()
    // await UserPet.fetchAll()
    // await UserTalent.fetchAll()
    // await UserWeapon.fetchAll()
  }
}