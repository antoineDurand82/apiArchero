module.exports = app => {
    const bracelets = require("../controllers/bracelet.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", bracelets.create);
  
    // Retrieve all bracelets
    router.get("/", bracelets.findAll);
  
    // Retrieve all published bracelets
    router.get("/published", bracelets.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", bracelets.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", bracelets.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", bracelets.delete);
  
    // Create a new Tutorial
    router.delete("/", bracelets.deleteAll);
  
    app.use('/api/bracelets', router);
  };