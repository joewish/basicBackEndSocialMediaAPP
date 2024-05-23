import mongoose from "mongoose";
import {userCommentsSchema} from "../schema/comments.schema.js"
const UserComments = mongoose.model("comments",userCommentsSchema)
export  const addComment = async (data) => {
    const { userID, postID, content } = data;
    try{
      const commentCreation = new UserComments({userId:userID, postID:postID, content:content})
      return await commentCreation.save()
    }catch(err){
      throw new Error(err)
    }
    
  };
  export const deleteComment = async (commentID) => {
    try {
      const deletedComment = await UserComments.findByIdAndDelete(commentID);
      if (!deletedComment) {
        throw new Error('Comment not found');
      }
      return deletedComment;
    } catch (err) {
      throw new Error(err);
    }
  };
  export const updateComment = async (data) => {
    const { commentId, content } = data;
    try {
      const updatedComment = await UserComments.findByIdAndUpdate(
        commentId,
        { content },
        { new: true, runValidators: true } // `new: true` returns the updated document
      );
      if (!updatedComment) {
        throw new Error('Comment not found');
      }
      return updatedComment;
    } catch (err) {
      throw new Error(err);
    }
  };
  export const getAllComments = async (postId) => {
    try {
      const comments = await UserComments.find({ postID: postId });
      return comments;
    } catch (err) {
      throw new Error(err);
    }
  };
      