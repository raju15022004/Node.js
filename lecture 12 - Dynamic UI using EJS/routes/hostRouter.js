// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
// const rootDir = require("../utils/pathUtil");
const homesController=require("../controllers/homes");

hostRouter.get("/add-home", homesController.getAddHome);


const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log('Home Registration successful for:', req.body, req.body.houseName);
  registeredHomes.push({houseName: req.body.houseName});
  res.render('homeAdded', {pageTitle: 'Home Added Successfully'});
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;

