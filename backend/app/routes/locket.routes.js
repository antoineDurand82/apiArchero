module.exports = app => {
    const lockets = require("../controllers/locket.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Locket
    router.post("/", lockets.create);
  
    // Retrieve all lockets
    router.get("/", lockets.findAll);
  
    // Retrieve a single Locket with id
    router.get("/:id", lockets.findOne);
  
    // Update a Locket with id
    router.put("/:id", lockets.update);
  
    // Delete a Locket with id
    router.delete("/:id", lockets.delete);
  
    // Create a new Locket
    router.delete("/", lockets.deleteAll);
  
    app.use('/api/lockets', router);
  };