<template>
  <select @blur="$emit('blur')" @change="$emit('user-input', value)" v-model="value"
    :class="['p-2 bg-white border border-gray-300 rounded focus:outline-none focus:shadow', !valid ? 'border-red-700' : '']"
  >
    <option v-for="(option, key) in options" :key="key" :value="key">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => []
    },
    valid: Boolean,
    val: String
  },
  data: () => ({
    value: ''
  }),
  created() {
    this.value = this.val
  },
  watch: {
    val() {
      this.value = this.val
    }
  }
}
</script>