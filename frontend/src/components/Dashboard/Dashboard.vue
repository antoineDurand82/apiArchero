<template>
  <div class="w-full">
    <Sidebar></Sidebar>
    <router-view class="dashboard-router"></router-view>
  </div>
</template>

<script>

import Sidebar from './SideBar'

export default {
  components: {
    Sidebar
  }

}
</script>

<style lang="scss" scoped>
  @import '~Style/components/dashboard';
</style>