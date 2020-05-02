<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="pt-32 flex w-full justify-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/AppComponent/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
html, body {
  @apply w-full h-full;
}
</style>