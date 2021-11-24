module.exports = app => {
    const timers = require("../controllers/timer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Timer
    router.post("/", timers.create);
  
    // Retrieve all timers
    router.get("/", timers.findAll);
  
    // Retrieve a single Timer with id
    router.get("/:id", timers.findOne);
  
    // Update a Timer with id
    router.put("/:id", timers.update);
  
    // Delete a Timer with id
    router.delete("/:id", timers.delete);
  
    // Create a new Timer
    router.delete("/", timers.deleteAll);
  
    app.use('/api/timers', router);
  };