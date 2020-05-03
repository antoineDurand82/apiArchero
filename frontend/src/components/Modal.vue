<template>
  <transition name="fade">
    <div class="fixed modal" v-if="isOpen">
      <div class="modal-background" @click="toggle(false)">
      </div>
      <div class="modal-container" :style="'max-width: ' + maxWidth + ';'">
        <div :class="'modal-content bg-white rounded w-full flex flex-col' + additionalClasses.join(' ')">
          <header v-if="!noHeader" class="text-center p-2 border-b border-gray-400 flex items-center justify-between">
            <h2 class="mx-auto text-2xl font-bold">
              <slot name="header">
                Title
              </slot>
            </h2>
            <button class="px-2 text-xl" @click="toggle(false)">
              <i class="fas fa-times"></i>
            </button>
          </header>
          <div class="p-2 overflow-auto h-full">
            <slot name="content">
              Content
            </slot>
          </div>
          <footer v-if="!noFooter" class="p-2 border-t border-gray-400">
            <slot name="footer">
            </slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    defaultOpen: Boolean,
    maxWidth: {
      type: String,
      default: '1200px'
    },
    noHeader: {
      type: Boolean,
      default: false
    },
    noFooter: {
      type: Boolean,
      default: true
    },
    additionalClasses: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    isOpen: false
  }),
  created() {
    this.isOpen = this.defaultOpen ?? false
  },
  watch: {
    isOpen(newValue) {
      const classes = document.querySelector('body').className.split(' ')
      if(newValue === true && classes.indexOf('overflow-hidden') === -1) classes.push('overflow-hidden')
      else if(newValue === false && classes.indexOf('overflow-hidden') !== -1) classes.splice(classes.indexOf('overflow-hidden'), 1)
      document.querySelector('body').className = classes.join(' ')
    }
  },
  methods: {
    toggle(force = undefined) {
      if(force) this.isOpen = force
      else this.isOpen = !this.isOpen
      this.$emit('toggle', this.isOpen)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  height: 100vh;
  width: 100vw;
  @apply top-0 left-0;

  &-background {
    @apply bg-black opacity-75 absolute h-full w-full;
  }

  &-container {
    @apply w-full left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 absolute p-2 h-full;
  }

  &-content {
    max-height: 100%;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>