<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="pt-24 flex w-full justify-center">
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
