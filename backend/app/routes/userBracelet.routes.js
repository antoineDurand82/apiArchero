module.exports = app => {
    const userBracelets = require("../controllers/userBracelet.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userBracelets
    router.get("/", userBracelets.findAll);
  
    // Retrieve a single UserBracelet with id
    router.get("/:id", userBracelets.findOne);
  
    app.use('/api/userBracelets', router);
  };