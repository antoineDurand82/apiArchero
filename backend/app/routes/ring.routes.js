module.exports = app => {
    const rings = require("../controllers/ring.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", rings.create);
  
    // Retrieve all rings
    router.get("/", rings.findAll);
  
    // Retrieve all published rings
    router.get("/published", rings.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", rings.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", rings.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", rings.delete);
  
    // Create a new Tutorial
    router.delete("/", rings.deleteAll);
  
    app.use('/api/rings', router);
  };