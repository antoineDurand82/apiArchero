module.exports = app => {
    const talents = require("../controllers/talent.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Talent
    router.post("/", talents.create);
  
    // Retrieve all talents
    router.get("/", talents.findAll);
  
    // Retrieve a single Talent with id
    router.get("/:id", talents.findOne);
  
    // Update a Talent with id
    router.put("/:id", talents.update);
  
    // Delete a Talent with id
    router.delete("/:id", talents.delete);
  
    // Create a new Talent
    router.delete("/", talents.deleteAll);
  
    app.use('/api/talents', router);
  };