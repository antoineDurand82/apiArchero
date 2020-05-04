export default {
  columns: [
    {
      'key': 'id',
      'name': 'Bracelet ID'
    },
    {
      'key': 'fullName',
      'name': 'Full Name'
    },
    {
      'key': 'attack',
      'name': 'Attack'
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
      slot: (bracelet) => `<img src="http://localhost:3000${bracelet.linkImage}" alt="Bracelet ${bracelet.fullName} image" />`
    }
  ],
  form: {
    name: 'Bracelet',
    display: 'fullName',
    fields: [
      {
        key: 'fullName',
        label: 'Full Name',
        type: 'text'
      },
      {
        key: 'attack',
        label: 'Attack',
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