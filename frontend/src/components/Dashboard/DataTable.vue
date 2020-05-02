<template>
	<div class="datatable">
		<div class="flex items-center mb-2">
			<div>
				<button class="px-2 py-1 bg-teal-700 text-white rounded mr-2" @click="openEditModal()">
					Add {{ form.name }}
				</button>
				<button class="px-2 py-1 bg-red-700 text-white rounded" @click="deleteData()">
					<i class="fas fa-trash-alt"></i>
				</button>
			</div>
			<div class="ml-auto">
				<label for="rowsPerPage">
					Rows per page
				</label>
				<select class="p-1 rounded border border-gray-300 bg-white" id="rowsPerPage" v-model="currentPerPage">
					<option v-for="(opt, index) in perPage" :key="opt" :value="index">
						{{ opt }}
					</option>
				</select>
			</div>
		</div>
		<table class="w-full">
			<thead>
				<tr class="text-left bg-gray-100 text-gray-600 tracking-wider uppercase text-xs font-bold">
					<th class="py-2 px-3 border-b border-gray-200">
						<label
							class="inline-flex items-center px-2 py-2">
							<input :checked="isAllSelected" type="checkbox" class="form-checkbox focus:outline-none" @change="toggleSelect()">
						</label>
					</th>
					<th class="border-b border-gray-200 px-6 py-2"
						v-for="column in columns" :key="column.key">
						{{ column.name }}
					</th>
					<th class="py-2 px-3 border-b border-gray-200">
						Actions
					</th>
				</tr>
			</thead>
			<tbody class="datatable-body">
				<tr v-for="model in data.data" :key="model[primaryKey]" class="text-gray-700 hover:bg-gray-200">
					<td class="border-dashed border-t border-gray-200 px-3">
						<label
							class="inline-flex items-center px-2 py-2">
							<input :checked="isSelected(model)" type="checkbox" class="form-checkbox rowCheckbox focus:outline-none" @change="toggleSelect(model)">
						</label>
					</td>
					<td v-for="column in columns" :key="column.key" class="border-dashed border-t border-gray-200 px-6 py-3">
						<slot :name="'cell:' + column.key" :scope="model">
							<span>{{ model[column.key] }}</span>
						</slot>
					</td>
					<td class="py-2 px-3 border-dashed border-t border-gray-200">
						<button class="mr-2 btn bg-teal-700 text-white rounded" @click="openEditModal(model)">
							<i class="fas fa-pencil-alt"></i>
						</button>
						<button class="btn bg-red-700 text-white rounded" @click="deleteData(model)">
							<i class="fas fa-trash-alt"></i>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="flex items-center mt-2">
			<div class="ml-auto">
				<label for="currentPage">
					Current page
				</label>
				<button
					:class="['mr-2 focus:outline-none', currentPage == 1 ? 'text-gray-400' : '']"
					@click="currentPage = currentPage > 1 ? currentPage - 1 : currentPage"
					:disabled="currentPage == 1"
				>
					<i class="fas fa-chevron-left"></i>
				</button>
				<input type="text" id="currentPage" class="p-1 border rounded border-gray-300 focus:outline-none focus:shadow w-12 text-right" v-model="currentPage">
				<button
					:class="['ml-2 focus:outline-none', currentPage == data.totalPages ? 'text-gray-400' : '']"
					@click="currentPage = currentPage < data.totalPages ? currentPage + 1 : currentPage"
					:disabled="currentPage == data.totalPages"
				>
					<i class="fas fa-chevron-right"></i>
				</button>
				<span class="ml-2">
					Total pages : {{ data.totalPages }}
				</span>
			</div>
		</div>
    <EditModal :model="editingModel" ref="editModal" :form="form" @submit="submitForm" />
	</div>
</template>

<script>
import { chunk, map, isEqual } from 'lodash'

export default {
	components: {
    EditModal: () => import('@/components/Dashboard/EditModal'),
	},
	props: {
		perPage: {
			type: Array,
			default: () => [
				5, 15, 25
			]
		},
		primaryKey: {
			type: String,
			default: 'id'
		},
		columns: {
			type: Array,
			required: true
		},
		rawData: {
			type: Array,
			required: true
		},
		form: {
			type: Object,
			required: true
		}
	},
  data: () => ({
		selected: [],
		currentPerPage: 0,
		currentPage: 1,
		editingModel: undefined
  }),
	computed: {
		data() {
			const chunkedData = chunk(this.rawData, this.perPage[this.getIndexForArray(this.currentPerPage, this.perPage)])
			return {
				data: chunkedData[this.getIndexForArray(this.currentPage - 1, chunkedData)],
				totalPages: chunkedData.length
			}
		},
		isAllSelected() {
			return isEqual(this.selected, this.data.data)
		}
	},
	methods: {
		getIndexForArray(index, array) {
			return index >= 0 && index < array.length ? index : 0
		},
		toggleSelect(model = null) {
			if(model) {
				const index = this.selected.indexOf(model)
				if(index === -1) this.selected.push(model)
				else this.selected.splice(index, 1)
			} else {
				this.selected = isEqual(this.selected, this.data.data) ? [] : this.data.data
			}
		},
		isSelected(model) {
			return map(this.selected, this.primaryKey).indexOf(model[this.primaryKey]) !== -1
		},
		deleteData(model = null) {
			const ok = confirm('Confirm delete ?')
			if(!ok) return
			const models = model ? [model] : this.selected
			this.selected = []
			this.$emit('delete', models)
		},
		submitForm(model) {
			this.$refs.editModal.toggle(false)
			this.editingModel = undefined
			this.$emit('submit', model)
		},
		openEditModal(model = undefined) {
			this.editingModel = {...model}
			this.$refs.editModal.toggle(true)
		}
	}
}
</script>

<style lang="scss" scoped>
  @import '~Style/components/datatable';
</style>