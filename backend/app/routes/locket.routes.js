module.exports = app => {
    const lockets = require("../controllers/locket.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", lockets.create);
  
    // Retrieve all lockets
    router.get("/", lockets.findAll);
  
    // Retrieve all published lockets
    router.get("/published", lockets.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", lockets.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", lockets.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", lockets.delete);
  
    // Create a new Tutorial
    router.delete("/", lockets.deleteAll);
  
    app.use('/api/lockets', router);
  };