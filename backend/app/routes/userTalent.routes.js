module.exports = app => {
    const userTalents = require("../controllers/userTalent.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userTalents
    router.get("/", userTalents.findAll);
  
    // Retrieve a single UserTalent with id
    router.get("/:id", userTalents.findOne);
  
    app.use('/api/userTalents', router);
  };