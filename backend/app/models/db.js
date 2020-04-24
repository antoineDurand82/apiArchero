class Database {
  Sequelize = null;
  dbConnection = null;

  constructor(models, Sequelize, dbConnection) {
    this.Sequelize = Sequelize
    this.dbConnection = dbConnection
    models.forEach((model) => {
      this[model.customModelName] = model
      this[model.customModelName].init(model.customInit, {sequelize: this.dbConnection, modelName: model.customModelName})
    })
    models.forEach((model) => {
      model.customRelations.forEach((relation) => {
        if(relation.type === 'belongsToMany' && relation.throughModel) {
          this[model.customModelName][relation.type](this[relation.targetModel], {through: this[relation.throughModel], ...relation.options})
        } else {
          this[model.customModelName][relation.type](this[relation.targetModel], relation.options)
        }
      })
    })
  }

  sync(options = {}) {
    return this.dbConnection.sync(options)
  }
}
module.exports = Database