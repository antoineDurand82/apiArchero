<template>
  <Modal ref="modal" @toggle="resetModel" max-width="800px">
    <template v-slot:header>
      {{ model ? `Editing ${form.name} ${model[form.display]}` : `Adding ${form.name}` }}
    </template>
    <template v-slot:content>
      <form @submit.prevent="$emit('submit', editingModel)">
        <div v-for="(field, fieldIndex) in form.fields" :key="field.key" class="my-2">
          <template v-if="field.children">
            <div v-for="(val, index) in editingModel[field.key]" :key="field.key + '.' + index" :class="[fieldIndex !== form.fields.length - 1 && !(field.add && (!field.limit || editingModel[field.key].length < field.limit)) ? 'border-b border-gray-200' : '']">
              <div v-for="child in field.children" :key="JSON.stringify(child)" class="my-2">
                <div class="flex justify-center items-center">
                  <label :for="field.key + '-' + index + '-' + child.key" class="mr-3 w-64">{{ field.label }}  {{ index + 1 }} {{ child.label }}</label>
                  <component
                    class="w-64"
                    v-bind="child.options"
                    :id="field.key + '-' + index + '-' + child.key"
                    :is="`${getComponentName(child.type)}-field`"
                    :type="child.type"
                    :val="field.prefix ? editingModel[field.key][index][field.prefix][child.key] : editingModel[field.key][index][child.key]"
                    :valid="true"
                    @user-input="setValue($event, field.key, index, child.key)"
                  />
                  <button class="p-2 font-bold" @click.prevent="editingModel[field.key].splice(index, 1)">-</button>
                </div>
                <div v-if="validationFields[field.key] !== true" class="text-center text-red-700 italic">
                  <div v-for="error in validationFields[field.key]" :key="error">
                    {{ error }}
                  </div>
                </div>
              </div>
            </div>
            <div v-if="field.add && (!field.limit || editingModel[field.key].length < field.limit)" class="text-center">
              <button @click.prevent="editingModel[field.key].push(field.addValue ? field.addValue() : {})" class="btn border border-teal-700 text-teal-700 my-1">Add {{ field.label }}</button>
            </div>
          </template>
          <template v-else>
            <div class="flex justify-center items-center">
              <label :for="field.key" class="mr-3 w-64">{{ field.label }}</label>
              <component
                :id="field.key"
                class="w-64"
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
          </template>
        </div>
        <div class="flex items-center justify-center my-4">
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
    errors: Object,
    entity: {
      default: null
    }
  },
  data: () => ({
    editingModel: {},
    validationFields: {},
    defaultRules: {
      required: (value, field) => !!value || `${field} is required`,
      // eslint-disable-next-line no-useless-escape
      number: (value, field) => !value || /^-?[0-9\.]+$/.test(value) || `${field} must be a number`,
      // eslint-disable-next-line no-useless-escape
      integer: (value, field) => !value || /^-?[0-9]+$/.test(value) || `${field} must be an integer`,
      // eslint-disable-next-line no-useless-escape
      positive: (value, field) => !value || /^[0-9\.]+$/.test(value) || `${field} must be positive`,
      // eslint-disable-next-line no-useless-escape
      negative: (value, field) => !value || /-^[0-9\.]+$/.test(value) || `${field} must be negative`,
    }
  }),
  created() {
    this.setModel()
  },
  watch: {
    errors(newValue) {
      this.validationFields = newValue
    },
    model() {
      this.setModel()
    }
  },
  methods: {
    getComponentName(type) {
      return ['text', 'number', 'email'].indexOf(type) !== -1 ? 'input' : type
    },
    getDefaultValue(field) {
      return field.default !== undefined ? field.default()
        : field.type === 'number'
          ? 0
          : field.type === 'select'
            ? field.options.multiple ? [Object.keys(field.options.options)[0]] : Object.keys(field.options.options)[0]
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
    setValue(value, key, index = null, childKey = null) {
      const field = find(this.form.fields, ['key', key])
      const k = field.setKey ?? key
      const val = field.setValue ? field.setValue(this.editingModel[k], value, index, childKey) : value
      this.editingModel[k] = val
    },
    toggle(force = undefined) {
      this.$refs.modal.toggle(force)
    },
    resetModel(isOpen) {
      if(!isOpen) this.editingModel = {}
      else this.setModel()
    },
    setModel() {
      if(this.model) this.editingModel = {...this.model}
      else {
        const model = {}
        this.form.fields.forEach((field) => {
          model[field.key] = this.getDefaultValue(field)
        })
        this.editingModel = model
      }
      console.log(this.editingModel)
    }
  }
}
</script>