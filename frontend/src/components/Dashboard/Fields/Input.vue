<template>
  <input :type="type" @blur="$emit('blur')" @input="$emit('user-input', value)" v-model="value"
    :class="['p-1 border border-gray-300 rounded focus:outline-none focus:shadow', !valid ? 'border-red-700' : '']"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
  props: {
    type: String,
    valid: Boolean,
    placeholder: {
      type: String,
      default: ''
    },
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