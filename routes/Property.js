const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const isAuth = require('../middlewares/isAuth').isAuth;
const property = require("../models/property");


const {addproperty,getproperty,deleteProperty,editproperty, getFeaturedProperties , searchProperties,getPropertyById, upload , addComment , getCommentsByProperty,getPropertyByUser} = require("../controllers/PropertyController");

//add new property
router.post("/addproperty",isAuth,upload.array(['photos']),addproperty);
//get properties

router.get("/getproperty",isAuth,getproperty);
//get property by id
router.post("/single-property/",getPropertyById);
//delete property

router.post("/delete-property/",isAuth,deleteProperty);
//edit property

router.put("/editproperty/:_id",isAuth,editproperty);

router.get('/get-featured'  ,getFeaturedProperties);

router.post('/search-properties' , searchProperties);

router.post('/add-comment',isAuth, addComment);

router.post('/get-comments', getCommentsByProperty);

router.get('/dashbordAgent',isAuth, getPropertyByUser);
  
module.exports = router;