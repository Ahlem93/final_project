const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const isAuth = require('../middlewares/isAuth').isAuth;
const property = require("../models/property");


const {addproperty,getproperty,deleteproperty,editproperty, getFeaturedProperties , searchProperties,getPropertyById, upload , addComment , getCommentsByProperty} = require("../controllers/PropertyController");

//add new property
router.post("/addproperty",isAuth,upload.array(['image']),addproperty);
//get properties

router.get("/getproperty",isAuth,getproperty);
//get property by id
router.post("/single-property/",getPropertyById);
//delete property

router.delete("/deleteproperty/:_id",isAuth,deleteproperty)
//edit property

router.put("/editproperty/:_id",isAuth,editproperty)

router.get('/get-featured'  ,getFeaturedProperties);

router.post('/search-properties' , searchProperties)

router.post('/add-comment',isAuth, addComment)
router.post('/get-comments', getCommentsByProperty)
  
module.exports = router;