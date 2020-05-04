<template>
  <div class="sidebar">
    <ul>
      <li class="sidebar-li" v-for="link in links" :key="link.route">
        <router-link class="sidebar-li-link" :to="{name: 'modelsCRUD', params: {entityName: link.route}}" exact active-class="active">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { filter, map } from 'lodash'

export default {
  data: () => ({
    isSidebarOpen: true,
  }),
  computed: {
    links() {
      return map(filter(Object.keys(this.$store.state.entities), key => ['$name', 'userArmors', 'userRings', 'userHeroes', 'userTalents', 'userBracelets', 'userLockets', 'userPets', 'userWeapons'].indexOf(key) === -1 ), model => {
        let name = model
        let route = model
        while(name.search(/[a-z][A-Z]/) !== -1) {
          const search = name.search(/[a-z][A-Z]/)
          name = name.slice(0, search + 1) + ' ' + name.slice(search + 1)
          route = route.slice(0, search + 1) + '-' + route[search + 1].toLowerCase() + route.slice(search + 2)
        }
        name = name[0].toUpperCase() + name.slice(1)
        return {
          name,
          route
        }
      })
    }
  },

}
</script>

<style lang="scss" scoped>
  @import '~Style/components/sidebar';
</style>