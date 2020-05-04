module.exports = app => {
    const userBracelets = require("../controllers/userBracelet.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userBracelets
    router.get("/", userBracelets.findAll);
  
    app.use('/api/userBracelets', router);
  };