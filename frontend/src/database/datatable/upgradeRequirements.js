export default UpgradeRequirements = {
  columns: [
    {
      'key': 'id',
      'name': 'upgrade Requirement ID'
    },
    {
      'key': 'level',
      'name': 'Level'
    },
    {
      'key': 'gold',
      'name': 'Gold'
    },
    {
      'key': 'scrolls',
      'name': 'Scrolls'
    },
    {
      'key': 'cumGold',
      'name': 'Cumulative Gold'
    },
    {
      'key': 'cumScrolls',
      'name': 'Cumulative Scrolls'
    }
  ],
  form: {
    name: 'Upgrade Requirement',
    display: 'level',
    fields: [
      {
        key: 'level',
        label: 'Level',
        type: 'number',
        options: {
          min: 0
        }
      },
      {
        key: 'gold',
        label: 'Gold',
        type: 'number',
        options: {
          min: 0
        }
      },
      {
        key: 'scrolls',
        label: 'Scrolls',
        type: 'number',
        options: {
          min: 0
        }
      },
      {
        key: 'cumGold',
        label: 'Cumulative Gold',
        type: 'number',
        options: {
          min: 0
        }
      },
      {
        key: 'cumScrolls',
        label: 'Cumulative Scrolls',
        type: 'number',
        options: {
          min: 0
        }
      },
    ]
  }
}