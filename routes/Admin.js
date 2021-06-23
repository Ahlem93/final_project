const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const { authuser, getallusers } = require('../controllers/UserController');
const {getAllPropertiesByAdmin, approuveProperty} = require("../controllers/PropertyController");



router.get("/allusers",getallusers);

router.get('/allproperties',getAllPropertiesByAdmin);

router.post('/approve-property', approuveProperty)

module.exports = router;