module.exports = app => {
    const userRings = require("../controllers/userRing.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userRings
    router.get("/", userRings.findAll);
  
    app.use('/api/userRings', router);
  };