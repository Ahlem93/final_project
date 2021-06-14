const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const propertySchema = new  Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
    propertytitle: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: []
    },
    price:{
        type: String,
        required: true
    },
    surface:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true,
        default : {}
    },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
//     likedByUser: [{
//       user_id: String, 
//       userFullName: String, 
//    }],
    approuved: {
        type: Boolean,
    }

});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;