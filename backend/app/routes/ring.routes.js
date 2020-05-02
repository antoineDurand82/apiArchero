module.exports = app => {
    const rings = require("../controllers/ring.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Ring
    router.post("/", rings.create);
  
    // Retrieve all rings
    router.get("/", rings.findAll);
  
    // Retrieve a single Ring with id
    router.get("/:id", rings.findOne);
  
    // Update a Ring with id
    router.put("/:id", rings.update);
  
    // Delete a Ring with id
    router.delete("/:id", rings.delete);
  
    // Create a new Ring
    router.delete("/", rings.deleteAll);
  
    app.use('/api/rings', router);
  };