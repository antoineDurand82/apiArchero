<template>
  <select @blur="$emit('blur')" @change="checkLimit(); $emit('user-input', value)" v-model="value"
    :class="['p-2 bg-white border border-gray-300 rounded focus:outline-none focus:shadow', !valid ? 'border-red-700' : '']"
  >
    <option value="none" disabled>{{ placeholder }}</option>
    <option v-for="(option, key) in opts" :key="key"
      :value="typeof options === 'object' ? key : optionValue ? typeof optionValue === 'string' ? option[optionValue] : optionValue(option) : option">
      {{ display ? option[display] : option }}<span v-if="displayId"> ({{ option[displayId] }})</span>
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: [Object, Function],
      default: () => []
    },
    placeholder: {
      type: String,
      default: 'Choose an option'
    },
    limit: {
      type: Number,
      default: null
    },
    display: {
      type: String,
      default: null
    },
    displayId: {
      type: String,
      default: null
    },
    optionValue: {
      type: [String, Function],
      default: null
    },
    valid: Boolean,
    val: [String, Array, Number]
  },
  data: () => ({
    value: '',
    funcOptions: []
  }),
  async created() {
    this.value = this.val
    if(typeof this.options !== 'object') {
      this.funcOptions = await this.options();
    }
    if(this.isDefault) this.value = Array.isArray(this.value) ? ['none'] : 'none'
  },
  watch: {
    val() {
      this.value = this.val
    }
  },
  computed: {
    opts() {
      return typeof this.options === 'object' ? this.options : this.funcOptions;
    },
    isDefault() {
      return !this.value || this.value === 'none' || Array.isArray(this.value) && this.value.length === 0
    }
  },
  methods: {
    checkLimit() {
      if(this.limit && Array.isArray(this.value) && this.value.length > this.limit) this.value = this.value.slice(0, this.limit)
    }
  },
}
</script>