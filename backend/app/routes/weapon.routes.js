module.exports = app => {
    const weapons = require("../controllers/weapon.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Weapon
    router.post("/", weapons.create);
  
    // Retrieve all weapons
    router.get("/", weapons.findAll);
  
    // Retrieve a single Weapon with id
    router.get("/:id", weapons.findOne);
  
    // Update a Weapon with id
    router.put("/:id", weapons.update);
  
    // Delete a Weapon with id
    router.delete("/:id", weapons.delete);
  
    // Create a new Weapon
    router.delete("/", weapons.deleteAll);
  
    app.use('/api/weapons', router);
  };