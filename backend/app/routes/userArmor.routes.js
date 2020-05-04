module.exports = app => {
    const userArmors = require("../controllers/userArmor.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userArmors
    router.get("/", userArmors.findAll);
  
    // Retrieve a single UserArmor with id
    router.get("/:id", userArmors.findOne);
  
    app.use('/api/userArmors', router);
  };