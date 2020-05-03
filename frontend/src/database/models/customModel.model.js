import { Model } from '@vuex-orm/core'

export default class CustomModel extends Model {
  static apiPath = ''

  static fetchAll(config = {}) {
    return this.api().get(this.apiPath, config)
  }

  static fetch(id, config = {}) {
    return this.api().get(this.apiPath + "/" + id, config)
  }

  static save(data, config = {}) {
    return this.api().post(this.apiPath, data, config)
  }

  static replace(id, data, config = {}) {
    return this.api().put(this.apiPath + "/" + id, data, config)
  }

  static async destroyAll(ids, config = {}) {
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      await this.destroy(id, config)
    }
  }

  static destroy(id, config = {}) {
    return this.api().delete(this.apiPath + "/" + id, {
      delete: id,
      ...config
    })
  }
}