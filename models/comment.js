const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new  Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "property"
    },
    message: {
        type: String,
        required: true
    },
    messageTitle: {
        type: String,
        required: true
    },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
//     likedByUser: [{
//       user_id: String, 
//       userFullName: String, 
//    }],

});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;