<template>
  <div>
    <h2>User List</h2>
    <DataTable/>
  </div>
</template>

<script>
export default {
  components: {
    DataTable: () => import('@/components/Dashboard/DataTable'),
  }
  

}
</script>

<style lang="scss" scoped>
  h2{
    @apply text-3xl font-semibold text-gray-700 mt-4 mx-40;
  }
</style>