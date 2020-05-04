module.exports = app => {
    const userLockets = require("../controllers/userLocket.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userLockets
    router.get("/", userLockets.findAll);
  
    app.use('/api/userLockets', router);
  };