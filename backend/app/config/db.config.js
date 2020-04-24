module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "api_archero",
    dialect: "mysql",
    PORT: 6606,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };