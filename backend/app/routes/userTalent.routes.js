module.exports = app => {
    const userTalents = require("../controllers/userTalent.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userTalents
    router.get("/", userTalents.findAll);
  
    app.use('/api/userTalents', router);
  };