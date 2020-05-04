module.exports = app => {
    const userHeroes = require("../controllers/userHero.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userHeroes
    router.get("/", userHeroes.findAll);
  
    app.use('/api/userHeroes', router);
  };