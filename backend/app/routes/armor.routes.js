module.exports = app => {
    const armors = require("../controllers/armor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Armor
    router.post("/", armors.create);
  
    // Retrieve all armors
    router.get("/", armors.findAll);
  
    // Retrieve a single Armor with id
    router.get("/:id", armors.findOne);
  
    // Update a Armor with id
    router.put("/:id", armors.update);
  
    // Delete a Armor with id
    router.delete("/:id", armors.delete);
  
    // Create a new Armor
    router.delete("/", armors.deleteAll);
  
    app.use('/api/armors', router);
  };