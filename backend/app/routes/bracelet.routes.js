module.exports = app => {
    const bracelets = require("../controllers/bracelet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Bracelet
    router.post("/", bracelets.create);
  
    // Retrieve all bracelets
    router.get("/", bracelets.findAll);
  
    // Retrieve a single Bracelet with id
    router.get("/:id", bracelets.findOne);
  
    // Update a Bracelet with id
    router.put("/:id", bracelets.update);
  
    // Delete a Bracelet with id
    router.delete("/:id", bracelets.delete);
  
    // Create a new Bracelet
    router.delete("/", bracelets.deleteAll);
  
    app.use('/api/bracelets', router);
  };