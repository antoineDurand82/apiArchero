export default {
  columns: [
    {
      'key': 'id',
      'name': 'Ring ID'
    },
    {
      'key': 'fullName',
      'name': 'Full Name'
    },
    {
      'key': 'ringBuff',
      'name': 'Ring Buff'
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
      slot: (ring) => `<img src="http://localhost:3000${ring.linkImage}" alt="Ring ${ring.fullName} image" />`
    }
  ],
  form: {
    name: 'Ring',
    display: 'fullName',
    fields: [
      {
        key: 'fullName',
        label: 'Full Name',
        type: 'text'
      },
      {
        key: 'ringBuff',
        label: 'Ring Buff',
        type: 'text'
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