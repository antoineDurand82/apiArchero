module.exports = app => {
    const userHeroes = require("../controllers/userHero.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userHeroes
    router.get("/", userHeroes.findAll);
  
    // Retrieve a single UserHero with id
    router.get("/:id", userHeroes.findOne);
  
    app.use('/api/userHeroes', router);
  };