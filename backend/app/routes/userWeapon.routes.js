module.exports = app => {
    const userWeapons = require("../controllers/userWeapon.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userWeapons
    router.get("/", userWeapons.findAll);
  
    // Retrieve a single UserWeapon with id
    router.get("/:id", userWeapons.findOne);
  
    app.use('/api/userWeapons', router);
  };