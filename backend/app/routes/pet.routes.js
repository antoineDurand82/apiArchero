module.exports = app => {
    const pets = require("../controllers/pet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Pet
    router.post("/", pets.create);
  
    // Retrieve all pets
    router.get("/", pets.findAll);
  
    // Retrieve a single Pet with id
    router.get("/:id", pets.findOne);
  
    // Update a Pet with id
    router.put("/:id", pets.update);
  
    // Delete a Pet with id
    router.delete("/:id", pets.delete);
  
    // Create a new Pet
    router.delete("/", pets.deleteAll);
  
    app.use('/api/pets', router);
  };