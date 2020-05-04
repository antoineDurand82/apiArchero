export default {
  columns: [
    {
      'key': 'id',
      'name': 'Talent ID'
    },
    {
      'key': 'fullName',
      'name': 'Full Name'
    },
    {
      'key': 'buff',
      'name': 'Buff'
    },
    {
      'key': 'linkImage',
      'name': 'Image',
      slot: (talent) => `<img src="http://localhost:3000${talent.linkImage}" alt="Talent ${talent.fullName} image" />`
    }
  ],
  form: {
    name: 'Talent',
    display: 'fullName',
    fields: [
      {
        key: 'fullName',
        label: 'Full Name',
        type: 'text'
      },
      {
        key: 'buff',
        label: 'Buff',
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