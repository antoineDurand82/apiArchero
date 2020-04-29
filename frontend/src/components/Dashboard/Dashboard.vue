<template>
  <div class="w-full">
    <Sidebar></Sidebar>
    <router-view></router-view>
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

<style>
</style>