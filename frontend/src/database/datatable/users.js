import Ring from '../models/ring.model'
import Armor from '../models/armor.model'
import Bracelet from '../models/bracelet.model'
import Hero from '../models/hero.model'
import Locket from '../models/locket.model'
import Pet from '../models/pet.model'
import Talent from '../models/talent.model'
import Weapon from '../models/weapon.model'

import UserRing from '../models/userRing.model'
// import UserArmor from '../models/userArmor.model'
// import UserBracelet from '../models/userBracelet.model'
// import UserHero from '../models/userHero.model'
// import UserLocket from '../models/userLocket.model'
// import UserPet from '../models/userPet.model'
// import UserTalent from '../models/userTalent.model'
// import UserWeapon from '../models/userWeapon.model'


export default {
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
        addValue: () => ({pivot:{ringId: null}}),
        setValue: (oldVal, newVal, index, key) => {
          oldVal[index].pivot[key] = newVal
          return oldVal
        },
        children: [
          {
            key: 'ringId',
            label: 'Name',
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
            label: 'Level',
            type: 'number',
            options: {
              min: 1
            }
          },
          {
            key: 'rarity',
            label: 'Rarity',
            type: 'select',
            options: {
              options: {
                common: 'Common',
                rare: 'Rare',
                epic: 'Epic',
                perfectEpic: 'Perfect Epic',
                legendary: 'Legendary',
                ancientLegendary: 'Ancient Legendary'
              }
            }
          }
        ],
        prefix: 'pivot',
        add: true,
        limit: 2,
        label: 'Ring'
      },
      {
        key: 'armors',
        addValue: () => ({pivot:{armorId: null}}),
        setValue: (oldVal, newVal, index, key) => {
          oldVal[index].pivot[key] = newVal
          return oldVal
        },
        children: [
          {
            key: 'armorId',
            label: 'Name',
            type: 'select',
            options: {
              options: () => {
                return Armor.all()
              },
              display: 'fullName',
              displayId: 'id',
              optionValue: 'id'
            }
          },
          {
            key: 'level',
            label: 'Level',
            type: 'number',
            options: {
              min: 1
            }
          },
          {
            key: 'rarity',
            label: 'Rarity',
            type: 'select',
            options: {
              options: {
                common: 'Common',
                rare: 'Rare',
                epic: 'Epic',
                perfectEpic: 'Perfect Epic',
                legendary: 'Legendary',
                ancientLegendary: 'Ancient Legendary'
              }
            }
          }
        ],
        prefix: 'pivot',
        add: true,
        limit: 1,
        label: 'Armor'
      },
      {
        key: 'bracelets',
        addValue: () => ({pivot:{braceletId: null}}),
        setValue: (oldVal, newVal, index, key) => {
          oldVal[index].pivot[key] = newVal
          return oldVal
        },
        children: [
          {
            key: 'braceletId',
            label: 'Name',
            type: 'select',
            options: {
              options: () => {
                return Bracelet.all()
              },
              display: 'fullName',
              displayId: 'id',
              optionValue: 'id'
            }
          },
          {
            key: 'level',
            label: 'Level',
            type: 'number',
            options: {
              min: 1
            }
          },
          {
            key: 'rarity',
            label: 'Rarity',
            type: 'select',
            options: {
              options: {
                common: 'Common',
                rare: 'Rare',
                epic: 'Epic',
                perfectEpic: 'Perfect Epic',
                legendary: 'Legendary',
                ancientLegendary: 'Ancient Legendary'
              }
            }
          }
        ],
        prefix: 'pivot',
        add: true,
        limit: 1,
        label: 'Bracelet'
      },
      {
        key: 'heroes',
        addValue: () => ({pivot:{heroId: null}}),
        setValue: (oldVal, newVal, index, key) => {
          oldVal[index].pivot[key] = newVal
          return oldVal
        },
        children: [
          {
            key: 'heroId',
            label: 'Name',
            type: 'select',
            options: {
              options: () => {
                return Hero.all()
              },
              display: 'fullName',
              displayId: 'id',
              optionValue: 'id'
            }
          },
          {
            key: 'level',
            label: 'Level',
            type: 'number',
            options: {
              min: 1
            }
          },
          {
            key: 'rarity',
            label: 'Rarity',
            type: 'select',
            options: {
              options: {
                common: 'Common',
                rare: 'Rare',
                epic: 'Epic',
                perfectEpic: 'Perfect Epic',
                legendary: 'Legendary',
                ancientLegendary: 'Ancient Legendary'
              }
            }
          }
        ],
        prefix: 'pivot',
        add: true,
        limit: 1,
        label: 'Hero'
      },
      {
        key: 'lockets',
        addValue: () => ({pivot:{locketId: null}}),
        setValue: (oldVal, newVal, index, key) => {
          oldVal[index].pivot[key] = newVal
          return oldVal
        },
        children: [
          {
            key: 'locketId',
            label: 'Name',
            type: 'select',
            options: {
              options: () => {
                return Locket.all()
              },
              display: 'fullName',
              displayId: 'id',
              optionValue: 'id'
            }
          },
          {
            key: 'level',
            label: 'Level',
            type: 'number',
            options: {
              min: 1
            }
          },
          {
            key: 'rarity',
            label: 'Rarity',
            type: 'select',
            options: {
              options: {
                common: 'Common',
                rare: 'Rare',
                epic: 'Epic',
                perfectEpic: 'Perfect Epic',
                legendary: 'Legendary',
                ancientLegendary: 'Ancient Legendary'
              }
            }
          }
        ],
        prefix: 'pivot',
        add: true,
        limit: 1,
        label: 'Locket'
      },
      {
        key: 'pets',
        addValue: () => ({pivot:{petId: null}}),
        setValue: (oldVal, newVal, index, key) => {
          oldVal[index].pivot[key] = newVal
          return oldVal
        },
        children: [
          {
            key: 'petId',
            label: 'Name',
            type: 'select',
            options: {
              options: () => {
                return Pet.all()
              },
              display: 'fullName',
              displayId: 'id',
              optionValue: 'id'
            }
          },
          {
            key: 'level',
            label: 'Level',
            type: 'number',
            options: {
              min: 1
            }
          },
          {
            key: 'rarity',
            label: 'Rarity',
            type: 'select',
            options: {
              options: {
                common: 'Common',
                rare: 'Rare',
                epic: 'Epic',
                perfectEpic: 'Perfect Epic',
                legendary: 'Legendary',
                ancientLegendary: 'Ancient Legendary'
              }
            }
          }
        ],
        prefix: 'pivot',
        add: true,
        limit: 2,
        label: 'Pet'
      },
      {
        key: 'talents',
        addValue: () => ({pivot:{talentId: null}}),
        setValue: (oldVal, newVal, index, key) => {
          oldVal[index].pivot[key] = newVal
          return oldVal
        },
        children: [
          {
            key: 'talentId',
            label: 'Name',
            type: 'select',
            options: {
              options: () => {
                return Talent.all()
              },
              display: 'fullName',
              displayId: 'id',
              optionValue: 'id'
            }
          },
          {
            key: 'level',
            label: 'Level',
            type: 'number',
            options: {
              min: 1
            }
          },
          {
            key: 'rarity',
            label: 'Rarity',
            type: 'select',
            options: {
              options: {
                common: 'Common',
                rare: 'Rare',
                epic: 'Epic',
                perfectEpic: 'Perfect Epic',
                legendary: 'Legendary',
                ancientLegendary: 'Ancient Legendary'
              }
            }
          }
        ],
        prefix: 'pivot',
        add: true,
        limit: 6,
        label: 'Talent'
      },
      {
        key: 'weapons',
        addValue: () => ({pivot:{weaponId: null}}),
        setValue: (oldVal, newVal, index, key) => {
          oldVal[index].pivot[key] = newVal
          return oldVal
        },
        children: [
          {
            key: 'weaponId',
            label: 'Name',
            type: 'select',
            options: {
              options: () => {
                return Pet.all()
              },
              display: 'fullName',
              displayId: 'id',
              optionValue: 'id'
            }
          },
          {
            key: 'level',
            label: 'Level',
            type: 'number',
            options: {
              min: 1
            }
          },
          {
            key: 'rarity',
            label: 'Rarity',
            type: 'select',
            options: {
              options: {
                common: 'Common',
                rare: 'Rare',
                epic: 'Epic',
                perfectEpic: 'Perfect Epic',
                legendary: 'Legendary',
                ancientLegendary: 'Ancient Legendary'
              }
            }
          }
        ],
        prefix: 'pivot',
        add: true,
        limit: 1,
        label: 'Weapon'
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

    await UserRing.fetchAll()
    // await UserArmor.fetchAll()
    // await UserBracelet.fetchAll()
    // await UserHero.fetchAll()
    // await UserLocket.fetchAll()
    // await UserPet.fetchAll()
    // await UserTalent.fetchAll()
    // await UserWeapon.fetchAll()
  },
  beforeSubmit: async (id) => {
    if(!id) return
    const userRings = UserRing.query().whereFk('userId', id).get()
    userRings.forEach(userRing => {
      userRing.$delete()
    })
  }
}