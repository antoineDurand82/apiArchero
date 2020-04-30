module.exports = app => {
    const armors = require("../controllers/armor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", armors.create);
  
    // Retrieve all armors
    router.get("/", armors.findAll);
  
    // Retrieve all published armors
    router.get("/published", armors.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", armors.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", armors.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", armors.delete);
  
    // Create a new Tutorial
    router.delete("/", armors.deleteAll);
  
    app.use('/api/armors', router);
  };