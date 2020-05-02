<template>
  <div>
    <h2>{{ title }} List</h2>
    <DataTable primary-key="id" :raw-data="models" :columns="columns" @delete="deleteData" :form="form" @submit="submitForm">

    </DataTable>
  </div>
</template>

<script>
export default {
  components: {
    DataTable: () => import('@/components/Dashboard/DataTable'),
  },
  async created() {
    await this.fetchAll();
  },
  watch: {
    entityName() {
      this.fetchAll()
    }
  },
  methods: {
    async deleteData(models) {
      for (let i = 0; i < models.length; i++) {
        const model = models[i];
        await model.destroy()
      }
      await this.$store.$db().model(this.entity).fetchAll()
    },
    async submitForm(model) {
      const entity = this.$store.$db().model(this.entity)
      if(!model.id) await (new entity(model)).save()
      else await model.replace()
      this.$store.$db().model(this.entity).fetchAll()
    },
    async fetchAll() {
      return this.$store.$db().model(this.entity).fetchAll()
    }
  },
  computed: {
    models() {
      return this.$store.$db().model(this.entity).all()
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