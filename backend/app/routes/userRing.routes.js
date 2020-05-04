module.exports = app => {
    const userRings = require("../controllers/userRing.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userRings
    router.get("/", userRings.findAll);
  
    // Retrieve a single UserRing with id
    router.get("/:id", userRings.findOne);
  
    app.use('/api/userRings', router);
  };