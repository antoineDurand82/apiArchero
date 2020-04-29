<template>
  <div class="sidebar">
    <ul>
      <li class="sidebar-li" v-for="link in links" :key="link.name">
        <router-link :to="link.route">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    isSidebarOpen: true,
    links: [
      {
        name: 'User',
        route: 'users'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
  @import '~Style/components/sidebar';
</style>