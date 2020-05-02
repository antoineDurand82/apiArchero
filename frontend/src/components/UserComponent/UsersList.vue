<template>
  <div>
    <h2>User List</h2>
    <DataTable primary-key="userId" :raw-data="rawData" :columns="columns" @delete="deleteData" :form="form" @submit="submitForm">
      <template v-slot:cell:gender="{ scope }">
        {{ scope.gender.toLowerCase() }}
      </template>
    </DataTable>
  </div>
</template>

<script>
import {filter, map} from 'lodash'

export default {
  components: {
    DataTable: () => import('@/components/Dashboard/DataTable'),
  },
  data: () => ({
    form: {
      name: 'user',
      display: 'firstName',
      fields: [
        {
          label: 'First name',
          key: 'firstName',
          type: 'text',
          options: {
            placeholder: 'Olivier'
          }
        },
        {
          label: 'Gender',
          key: 'gender',
          type: 'select',
          options: {
            options: {
              male: 'Male',
              female: 'Female'
            }
          }
        },
        {
          label: 'Email',
          key: 'emailAddress',
          type: 'email',
          rules: [
            'required',
            (value) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value) || 'Email must be an email'
          ]
        }
      ]
    },
    columns: [
      {
        'key': 'userId',
        'name': 'User ID'
      },
      {
        'key': 'firstName',
        'name': 'Firstname'
      },
      {
        'key': 'lastName',
        'name': 'Lastname'
      },
      {
        'key': 'emailAddress',
        'name': 'Email'
      },
      {
        'key': 'gender',
        'name': 'Gender'
      },
      {
        'key': 'phoneNumber',
        'name': 'Phone'
      }
    ],
    rawData: [
      {
        "userId": 1,
        "firstName": "Cort",
        "lastName": "Tosh",
        "emailAddress": "ctosh0@github.com",
        "gender": "Male",
        "phoneNumber": "327-626-5542"
      }, {
        "userId": 2,
        "firstName": "Brianne",
        "lastName": "Dzeniskevich",
        "emailAddress": "bdzeniskevich1@hostgator.com",
        "gender": "Female",
        "phoneNumber": "144-190-8956"
      }, {
        "userId": 3,
        "firstName": "Isadore",
        "lastName": "Botler",
        "emailAddress": "ibotler2@gmpg.org",
        "gender": "Male",
        "phoneNumber": "350-937-0792"
      }, {
        "userId": 4,
        "firstName": "Janaya",
        "lastName": "Klosges",
        "emailAddress": "jklosges3@amazon.de",
        "gender": "Female",
        "phoneNumber": "502-438-7799"
      }, {
        "userId": 5,
        "firstName": "Freddi",
        "lastName": "Di Claudio",
        "emailAddress": "fdiclaudio4@phoca.cz",
        "gender": "Female",
        "phoneNumber": "265-448-9627"
      }, {
        "userId": 6,
        "firstName": "Oliy",
        "lastName": "Mairs",
        "emailAddress": "omairs5@fda.gov",
        "gender": "Female",
        "phoneNumber": "221-516-2295"
      }, {
        "userId": 7,
        "firstName": "Tabb",
        "lastName": "Wiseman",
        "emailAddress": "twiseman6@friendfeed.com",
        "gender": "Male",
        "phoneNumber": "171-817-5020"
      }, {
        "userId": 8,
        "firstName": "Joela",
        "lastName": "Betteriss",
        "emailAddress": "jbetteriss7@msu.edu",
        "gender": "Female",
        "phoneNumber": "481-100-9345"
      }, {
        "userId": 9,
        "firstName": "Alistair",
        "lastName": "Vasyagin",
        "emailAddress": "avasyagin8@gnu.org",
        "gender": "Male",
        "phoneNumber": "520-669-8364"
      }, {
        "userId": 10,
        "firstName": "Nealon",
        "lastName": "Ratray",
        "emailAddress": "nratray9@typepad.com",
        "gender": "Male",
        "phoneNumber": "993-654-9793"
      }, {
        "userId": 11,
        "firstName": "Annissa",
        "lastName": "Kissick",
        "emailAddress": "akissicka@deliciousdays.com",
        "gender": "Female",
        "phoneNumber": "283-425-2705"
      }, {
        "userId": 12,
        "firstName": "Nissie",
        "lastName": "Sidnell",
        "emailAddress": "nsidnellb@freewebs.com",
        "gender": "Female",
        "phoneNumber": "754-391-3116"
      }, {
        "userId": 13,
        "firstName": "Madalena",
        "lastName": "Fouch",
        "emailAddress": "mfouchc@mozilla.org",
        "gender": "Female",
        "phoneNumber": "584-300-9004"
      }, {
        "userId": 14,
        "firstName": "Rozina",
        "lastName": "Atkins",
        "emailAddress": "ratkinsd@japanpost.jp",
        "gender": "Female",
        "phoneNumber": "792-856-0845"
      }, {
        "userId": 15,
        "firstName": "Lorelle",
        "lastName": "Sandcroft",
        "emailAddress": "lsandcrofte@google.nl",
        "gender": "Female",
        "phoneNumber": "882-911-7241"
      }
    ],
  }),
  methods: {
    deleteData(models) {
			this.rawData = filter(this.rawData, (obj) => map(models, 'userId').indexOf(obj.userId) === -1)
    },
    submitForm(user) {
      console.log(user)
    }
  }
}
</script>

<style lang="scss" scoped>
  h2{
    @apply text-3xl font-semibold text-gray-700 mt-4 mx-40;
  }
</style>