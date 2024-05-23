import mongoose from "mongoose";

export const userCommentsSchema = mongoose.Schema({
  userID: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  postID: {
    type: mongoose.Types.ObjectId,
    ref: 'Post', 
    required: true,
  },
  content: {
    type: String,
    required: true,
  }
}, { timestamps: true });

