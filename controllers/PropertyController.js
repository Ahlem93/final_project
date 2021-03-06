const property = require('../models/property');
const Comment = require('../models/comment')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: ((req, file, callback) => {
    callback(null, 'client/public/img/properties');
  }),
  filename(req, file, callback) {
    console.log(file);
    callback(null, new Date().getTime() + '_' + file.originalname);
  }
})

exports.upload = multer({
  storage: storage,
  limits: {fileSize: 2000000},
  fileFilter(req, file, callback) {
    if (!file.originalname.toLowerCase().match(/\.(jpg|jpeg|png|webp)/)) {
      return callback(new Error('File must be an image'));
    }
    return callback(null, true);
  }
})

//add new property
exports.addproperty = async(req, res,) => {
const { propertytitle ,bedrooms,description,price,surface,address,city,date,photos} = req.body;
try {
    let errors = [];
  if (!propertytitle) {
    errors.push({ propertytitle: "required" });
  }
  if (!bedrooms) {
    errors.push({ bedrooms: "required" });
  }
  if (!description) {
    errors.push({ description: "required" });
  }
  if (!price) {
    errors.push({ price: "required" });
  }
  // if (!images) {
  //   errors.push({ images: "required"});
  // }
  if (!surface) {
    errors.push({ surface: "required"});
  }
  
  if (!address) {
    errors.push({ address: "required"});
  }
  if (!city) {
    errors.push({ city: "required"});
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors });
  }
  let imageUrl  = []
  // console.log(req.files);
  // req.files.forEach(file => {
  //   console.log(file)
  //   imageUrl.push(file.path.replace('public\\', '/'));
  // })

    const newproperty = new property({
      user : req.user.id,
      propertytitle : propertytitle,
      bedrooms : bedrooms,
      description : description,
      price : price,
      surface : surface,
      address : address,
      city : city,
      date : date ,
      image : req.files[0].filename , 
      approuved : false
    });    
    // router.post('/image', (req, res) => {
    //     upload(req, res, (err) => {
    //         if (err){
    //             console.log(err);
    //         }
    //         if(!err)
    //             return res.send(200).end();
    //     });
    // });
    const Property = await newproperty.save();
    res.json({ msg: "property added", Property });
  } catch (error) {
    console.log(error);
  }}

//get properties
exports.getproperty=async (req, res) => {
    try {
      const properties = await property.find();
      res.json({properties});
    } catch (error) {
      console.log(error);
    }
  };
  //get property by id
  exports.getPropertyById=async (req, res) => {
    const  id = req.body.id;
    try {
      console.log(id);
      const singleProperty = await property.findById(id);
      console.log(singleProperty)
      res.json({singleProperty});
    } catch (error) {
      console.log(error);
    }
  }


  exports.approuveProperty = async(req, res) => {
    const  id = req.body.id;
    console.log(id);
    const singleProperty = await property.findById(id);
    console.log(singleProperty);
     singleProperty.approuved = true;
     singleProperty.save();
     res.json({msg : 'property approuved'});
  }
    

//delete property
exports.deleteProperty= async (req, res) => {
    const  id = req.body.id;
    console.log( id);
    try {
      const deleted_property = await property.findOneAndDelete({_id : id });
      res.json({ msg: "property deleted", deleted_property });
    } catch (error) {
      console.log(error);
    }
  };

  //edit property
exports.editproperty=async (req, res) => {
    const { _id } = req.params;
    try {
      const property = await property.findOneAndUpdate({ _id }, { $set: req.body });
      res.json({ msg: "property edited", property });
    } catch (error) {
      console.log(error);
    }
  };

  //get Featured properties
exports.getFeaturedProperties = async (req , res) => {
  try{
      const properties = await property.find({approuved : true}).sort({updatedDate : -1});
      res.json({properties})
  }catch (error) {
      console.log(error);
  }
}
exports.getAllPropertiesByAdmin = async (req , res) => {
  try{
      const properties = await property.find().sort({updatedDate : -1});
      res.json({properties})
  }catch (error) {
      console.log(error);
  }
}
//search properties
exports.searchProperties = async (req , res) => {
  const  city = req.body;
  console.log(city);
  try{
      const properties = await property.find({city : req.body.city , approuved : true});
      res.json({properties})
  }catch (error) {
      console.log(error);
  }
}

exports.addComment = async (req , res) =>  {
  const { messageTitle ,message , propertyId} = req.body;

  try{
    const newComment = new Comment({
      user : req.user.id,
      property : propertyId,
      messageTitle : messageTitle ,
      message : message,
    });    
    const comment = await newComment.save();
    res.json({ msg: "comment added", comment });

  }catch(error) {
    console.log(error)
  }
}

exports.getCommentsByProperty = async (req,res) => {
  const  id = req.body.property;
  try {
    console.log(id);
    const comments = await Comment.find({property : id});
    res.json({comments});
  } catch (error) {
    console.log(error);
  }
}
exports.getPropertyByUser = async (req,res) => {
  const userId = req.user.id;
  console.log(req.user.id);
  try {
    const agentProperties= await property.find({user : userId});
    res.json({agentProperties});
  } catch (error) {
    console.log(error);
  }
}
