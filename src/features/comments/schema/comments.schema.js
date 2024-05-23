const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export const userCommentsSchema = new Schema({
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  postID: {
    type: Schema.Types.ObjectId,
    ref: 'Post', 
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, { timestamps: true });

