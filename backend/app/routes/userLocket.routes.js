module.exports = app => {
    const userLockets = require("../controllers/userLocket.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all userLockets
    router.get("/", userLockets.findAll);
  
    // Retrieve a single UserLocket with id
    router.get("/:id", userLockets.findOne);
  
    app.use('/api/userLockets', router);
  };