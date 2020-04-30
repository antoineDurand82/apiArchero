module.exports = app => {
    const talents = require("../controllers/talent.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", talents.create);
  
    // Retrieve all talents
    router.get("/", talents.findAll);
  
    // Retrieve all published talents
    router.get("/published", talents.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", talents.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", talents.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", talents.delete);
  
    // Create a new Tutorial
    router.delete("/", talents.deleteAll);
  
    app.use('/api/talents', router);
  };