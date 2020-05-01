<template>
  <div class="datatable">
    <table>
      <thead >
				<tr class="text-left">
					<th class="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">
						<label
							class="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
							<input type="checkbox" class="form-checkbox focus:outline-none focus:shadow-outline" >
						</label>
					</th>
					<th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
						v-for="column in columns" :key="column.key">
						{{ column.value }}
					</th>
				</tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userId">
          <td class="border-dashed border-t border-gray-200 px-3">
            <label
              class="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
              <input type="checkbox" class="form-checkbox rowCheckbox focus:outline-none " :name="user.userId">
            </label>
          </td>
					<td v-for="column in columns" :key="column.key"  class="border-dashed border-t border-gray-200 userId">
						<span class="text-gray-700 px-6 py-3 flex items-center" >{{ user[column.key] }}</span>
					</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
		return {
			columns: [
				{
					'key': 'userId',
					'value': 'User ID'
				},
				{
					'key': 'firstName',
					'value': 'Firstname'
				},
				{
					'key': 'lastName',
					'value': 'Lastname'
				},
				{
					'key': 'emailAddress',
					'value': 'Email'
				},
				{
					'key': 'gender',
					'value': 'Gender'
				},
				{
					'key': 'phoneNumber',
					'value': 'Phone'
				}
			],
			users: [
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
				}]
		}
  }
}
</script>

<style lang="scss" scoped>
  @import '~Style/components/datatable';
</style>