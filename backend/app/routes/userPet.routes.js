module.exports = app => {
    const userPets = require("../controllers/userPet.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userPets
    router.get("/", userPets.findAll);
  
    // Retrieve a single UserPet with id
    router.get("/:id", userPets.findOne);
  
    app.use('/api/userPets', router);
  };