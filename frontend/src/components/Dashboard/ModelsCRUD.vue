<template>
  <div>
    <h2>{{ title }} List</h2>
    <DataTable 
      primary-key="id" 
      :raw-data="models" 
      :columns="columns" 
      :form="form" 
      :entity="entityClass" 
      :loading="isLoading" 
      :error="error"
      @delete="deleteData" 
      @submit="submitForm" 
    >
    </DataTable>
  </div>
</template>

<script>
import { map } from 'lodash'

export default {
  components: {
    DataTable: () => import('@/components/Dashboard/DataTable'),
  },
  async created() {
    this.isLoading = true
    try {
      await this.fetchAll();
    } catch (error) {
      this.error = error.message
    }
    this.isLoading = false
  },
  watch: {
    async entityName() {
      this.isLoading = true
      try {
        await this.fetchAll();
      } catch (error) {
        this.error = error.message
      }
      this.isLoading = false
    }
  },
  data: () => ({
    isLoading: false,
    error: null
  }),
  methods: {
    async deleteData(models) {
      this.isLoading = true
      try {
        await this.entityClass.destroyAll(map(models, 'id'))
        await this.fetchAll()
      } catch (error) {
        this.error = error.message
      }
      this.isLoading = false
    },
    async submitForm(model) {
      this.isLoading = true
      try {
        if(!model.id) await this.entityClass.save(model)
        else await this.entityClass.replace(model.id, model)
        await this.fetchAll()
      } catch (error) {
        this.error = error.message
      }
      this.isLoading = false
    },
    async fetchAll() {
      this.error = null
      if(this.$store.state.datatable[this.entity].beforeLoad && typeof this.$store.state.datatable[this.entity].beforeLoad === 'function') {
        await this.$store.state.datatable[this.entity].beforeLoad()
      }
      await this.entityClass.fetchAll()
    }
  },
  computed: {
    models() {
      return this.entityClass.query().withAll().get()
    },
    columns() {
      return this.$store.state.datatable[this.entity].columns
    },
    form() {
      return this.$store.state.datatable[this.entity].form
    },
    title() {
      let name = this.entityName
      while(name.search(/-[a-z]/) !== -1) {
        const search = name.search(/-[a-z]/)
        name = name.slice(0, search) + ' ' + name[search + 1].toUpperCase() + name.slice(search + 2)
      }
      name = name[0].toUpperCase() + name.slice(1)
      return name
    },
    entityClass() {
      return this.$store.$db().model(this.entity) 
    },
    entity() {
      let name = this.entityName
      while(name.search(/-[a-z]/) !== -1) {
        const search = name.search(/-[a-z]/)
        name = name.slice(0, search) + name[search + 1].toUpperCase() + name.slice(search + 2)
      }
      return name
    },
    entityName() {
      return this.$route.params.entityName
    }
  }
}
</script>

<style lang="scss" scoped>
  h2{
    @apply text-3xl font-semibold text-teal-700 ml-8;
  }
</style>