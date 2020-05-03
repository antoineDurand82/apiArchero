export default Weapons = {
  columns: [
    {
      'key': 'id',
      'name': 'Weapon ID'
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
      'key': 'attackSpeed',
      'name': 'Attack Speed %'
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
    name: 'Weapon',
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
          min: 0,
        }
      },
      {
        key: 'attackSpeed',
        label: 'Attack Speed %',
        type: 'number',
        options: {
          min: 0,
        }
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