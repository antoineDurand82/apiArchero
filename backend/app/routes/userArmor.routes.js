module.exports = app => {
    const userArmors = require("../controllers/userArmor.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userArmors
    router.get("/", userArmors.findAll);
  
    app.use('/api/userArmors', router);
  };