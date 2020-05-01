<template>
  <Modal ref="modal" @toggle="resetModel">
    <template v-slot:content>
      <form @submit.prevent="$emit('submit', editingModel)">
        <div v-for="field in form.fields" :key="field.key" class="my-2">
          <div class="flex justify-center items-center">
            <label :for="field.key" class="mr-3">{{ field.label }}</label>
            <component
              :is="`${getComponentName(field.type)}-field`"
              v-bind="field.options"
              :type="field.type"
              :val="editingModel[field.key]"
              @user-input="setValue($event, field.key)"
              @blur="validateField(field.key)"
              :valid="validationFields[field.key] === undefined || validationFields[field.key] === true"
            />
          </div>
          <div v-if="validationFields[field.key] !== true" class="text-center text-red-700 italic">
            <div v-for="error in validationFields[field.key]" :key="error">
              {{ error }}
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button class="btn big bg-teal-700 hover:bg-teal-800 text-white" type="submit">
            {{ model ? `Confirm editing ${form.name} ${model[form.display]}` : `Add ${form.name}` }}
          </button>
        </div>
      </form>
    </template>
  </Modal>
</template>

<script>
import {find} from 'lodash'
export default {
  components: {
    Modal: () => import('@/components/Modal'),
    /* eslint-disable vue/no-unused-components */
    InputField: () => import('./Fields/Input'),
    SelectField: () => import('./Fields/Select'),
    /* eslint-enable vue/no-unused-components */
  },
  props: {
    model: {
      type: Object
    },
    form: {
      type: Object,
      required: true
    },
    errors: Object
  },
  data: () => ({
    editingModel: {},
    validationFields: {},
    defaultRules: {
      required: (value, field) => !!value || `${field} is required`
    }
  }),
  watch: {
    errors(newValue) {
      this.validationFields = newValue
    },
    model() {
      if(this.model) this.editingModel = {...this.model}
      else {
        const model = {}
        this.form.fields.forEach((field) => {
          model[field.key] = this.getDefaultValue(field)
        })
        this.editingModel = model
      }
    }
  },
  methods: {
    getComponentName(type) {
      return ['text', 'number', 'email'].indexOf(type) !== -1 ? 'input' : type
    },
    getDefaultValue(field) {
      return field.default
        ?? field.type === 'number'
          ? 0
          : field.type === 'select'
            ? Object.keys(field.options.options)[0]
            : ''
    },
    validateField(key) {
      const field = find(this.form.fields, ['key', key])
      if(!field.rules) return true
      const errors = []
      for (let i = 0; i < field.rules.length; i++) {
        const rule = field.rules[i];
        const valid = typeof rule === 'string' ? this.defaultRules[rule](this.editingModel[key], field.label) : rule(this.editingModel[key])
        if(valid !== true) errors.push(valid)
      }
      this.validationFields = {...this.validationFields, [key]: errors.length > 0 ? errors : true}
    },
    setValue(value, key) {
      this.editingModel[key] = value
    },
    toggle(force = undefined) {
      this.$refs.modal.toggle(force)
    },
    resetModel(isOpen) {
      if(!isOpen) this.editingModel = {}
    }
  }
}
</script>