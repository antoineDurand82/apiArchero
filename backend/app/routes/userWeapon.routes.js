module.exports = app => {
    const userWeapons = require("../controllers/userWeapon.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userWeapons
    router.get("/", userWeapons.findAll);
  
    app.use('/api/userWeapons', router);
  };