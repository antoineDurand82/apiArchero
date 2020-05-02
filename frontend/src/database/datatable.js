export default {
  state: () => ({
    users: {
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
        ]
      },
    },

    armors: {
      columns: [
        {
          'key': 'id',
          'name': 'Armor ID'
        },
        {
          'key': 'maxHp',
          'name': 'HP'
        },
        {
          'key': 'commonBuff',
          'name': 'Common Buff'
        },
        {
          'key': 'rareBuff',
          'name': 'Rare Buff'
        },
        {
          'key': 'epicBuff',
          'name': 'Epic Buff'
        },
        {
          'key': 'perfectEpicBuff',
          'name': 'Perfect Epic Buff'
        },
        {
          'key': 'legendaryBuff',
          'name': 'Legendary Buff'
        },
        {
          'key': 'ancientLegendaryBuff',
          'name': 'Ancient Legendary Buff'
        },
        {
          'key': 'linkImage',
          'name': 'Image'
        }
      ],
      form: {
        name: 'Armor',
        display: 'fullName',
        fields: [
        ]
      }
    }
  })
}