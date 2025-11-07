// External Module
const express = require("express");
const hostRouter = express.Router();

const homesController = require("../controllers/homes");

// ✅ Show form
hostRouter.get("/add-home", homesController.getAddHome);

// ✅ Save form data
hostRouter.post("/add-home", homesController.postAddHome);

// ✅ Show all homes
hostRouter.get("/homes", homesController.getHomes);

module.exports = hostRouter;



