module.exports = app => {
    const weapons = require("../controllers/weapon.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", weapons.create);
  
    // Retrieve all weapons
    router.get("/", weapons.findAll);
  
    // Retrieve all published weapons
    router.get("/published", weapons.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", weapons.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", weapons.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", weapons.delete);
  
    // Create a new Tutorial
    router.delete("/", weapons.deleteAll);
  
    app.use('/api/weapons', router);
  };