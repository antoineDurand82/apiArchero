export default {
  columns: [
    {
      'key': 'id',
      'name': 'Armor ID'
    },
    {
      'key': 'fullName',
      'name': 'Full Name'
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
      'name': 'Image',
      slot: (armor) => `<img src="http://localhost:3000${armor.linkImage}" alt="Armor ${armor.fullName} image" />`
    }
  ],
  form: {
    name: 'Armor',
    display: 'fullName',
    fields: [
      {
        key: 'fullName',
        label: 'Full Name',
        type: 'text'
      },
      {
        key: 'maxHp',
        label: 'Max HP',
        type: 'number',
        options: {
          min: 0
        }
      },
      {
        key: 'commonBuff',
        label: 'Common Buff',
        type: 'text'
      },
      {
        key: 'rareBuff',
        label: 'Rare Buff',
        type: 'text'
      },
      {
        key: 'epicBuff',
        label: 'Epic Buff',
        type: 'text'
      },
      {
        key: 'perfectEpicBuff',
        label: 'Perfect Epic Buff',
        type: 'text'
      },
      {
        key: 'legendaryBuff',
        label: 'Legendary Buff',
        type: 'text'
      },
      {
        key: 'ancientLegendaryBuff',
        label: 'Ancient Legendary Buff',
        type: 'text'
      },
      {
        key: 'linkImage',
        label: 'Link Image',
        type: 'text'
      },
    ]
  }
}