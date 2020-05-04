<template>
  <nav class="navbar">
    <div class="navbar-div-logo">
      <IconBow class="navbar-img"/>
      <router-link to="/" class="font-semibold text-xl tracking-tight ml-4">Builder Archero</router-link>
    </div>
    <div class="block lg:hidden" @click="isExpanded=!isExpanded">
      <button class="navbar-menu-button">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" v-if="isExpanded">
      <router-link to="/dashboard" class="navbar-dashboard-button" >DashBoard</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  components: {
    IconBow: () => import('@/components/Icon/Bow'),
  },
  data: () => ({
    isExpanded: false,
  }),
  created() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      if (window.innerWidth >= 1024) this.isExpanded = true;
      else this.isExpanded = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~Style/components/navbar';
</style>