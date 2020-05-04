module.exports = app => {
    const upgradeRequirements = require("../controllers/upgradeRequirement.controller.js");
  
    var router = require("express").Router();

    // Create a new UpgradeRequirement
    router.post("/", upgradeRequirements.create);

    // Retrieve all upgradeRequirements
    router.get("/", upgradeRequirements.findAll);
    
    // Retrieve a single UpgradeRequirement with id
    router.get("/:id", upgradeRequirements.findOne);
    
    // Update a UpgradeRequirement with id
    router.put("/:id", upgradeRequirements.update);
    
    // Delete a UpgradeRequirement with id
    router.delete("/:id", upgradeRequirements.delete);
    
    // Create a new UpgradeRequirement
    router.delete("/", upgradeRequirements.deleteAll);
  
    // Retrieve all upgradeRequirements
    router.get("/", upgradeRequirements.findAll);
  
    app.use('/api/upgradeRequirements', router);
  };