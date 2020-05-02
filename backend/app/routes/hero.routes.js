module.exports = app => {
    const heroes = require("../controllers/hero.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Hero
    router.post("/", heroes.create);
  
    // Retrieve all heroes
    router.get("/", heroes.findAll);
  
    // Retrieve a single Hero with id
    router.get("/:id", heroes.findOne);
  
    // Update a Hero with id
    router.put("/:id", heroes.update);
  
    // Delete a Hero with id
    router.delete("/:id", heroes.delete);
  
    // Create a new Hero
    router.delete("/", heroes.deleteAll);
  
    app.use('/api/heroes', router);
  };