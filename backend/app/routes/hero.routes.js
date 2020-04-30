module.exports = app => {
    const heroes = require("../controllers/hero.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", heroes.create);
  
    // Retrieve all heroes
    router.get("/", heroes.findAll);
  
    // Retrieve all published heroes
    router.get("/published", heroes.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", heroes.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", heroes.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", heroes.delete);
  
    // Create a new Tutorial
    router.delete("/", heroes.deleteAll);
  
    app.use('/api/heroes', router);
  };