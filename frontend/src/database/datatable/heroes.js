export default {
  columns: [
    {
      'key': 'id',
      'name': 'Hero ID'
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
      'key': 'attack',
      'name': 'Attack'
    },
    {
      'key': 'firstBuff',
      'name': 'First Buff'
    },
    {
      'key': 'secondBuff',
      'name': 'Second Buff'
    },
    {
      'key': 'thirdBuff',
      'name': 'Third Buff'
    },
    {
      'key': 'fourthBuff',
      'name': 'Fourth Buff'
    },
    {
      'key': 'linkImage',
      'name': 'Image',
      slot: (hero) => `<img src="http://localhost:3000${hero.linkImage}" alt="Hero ${hero.fullName} image" />`
    }
  ],
  form: {
    name: 'Hero',
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
        key: 'attack',
        label: 'Attack',
        type: 'number',
        options: {
          min: 0
        }
      },
      {
        key: 'firstBuff',
        label: 'First Buff',
        type: 'text'
      },
      {
        key: 'secondBuff',
        label: 'Second Buff',
        type: 'text'
      },
      {
        key: 'thirdBuff',
        label: 'Third Buff',
        type: 'text'
      },
      {
        key: 'fourthBuff',
        label: 'Fourth Buff',
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