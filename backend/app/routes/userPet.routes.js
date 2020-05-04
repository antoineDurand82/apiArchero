module.exports = app => {
    const userPets = require("../controllers/userPet.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userPets
    router.get("/", userPets.findAll);
  
    app.use('/api/userPets', router);
  };