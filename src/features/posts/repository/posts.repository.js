import mongoose from "mongoose";
import usersPostSchema from "../schema/post.schema.js";

const userPosts = mongoose.model("Posts", usersPostSchema);

export const addPost = async (data) => {
    try {
        const { userID, caption, imageURL } = data;
        const newPost = new userPosts({ userID, caption, imageURL });
        await newPost.save();
        return newPost;
    } catch (error) {
        console.error("Error adding post:", error);
        throw new Error(error)
    }
};

export const getPostByID = async (postID) => {
    try {
        const post = await userPosts.findById(postID);
        return post ? post : null;
    } catch (error) {
        console.error("Error getting post by ID:", error);
        throw new Error(error)
    }
};

export const getPostByUserID = async (userID) => {
    try {
        const posts = await userPosts.find({ userID: userID.userID });
        return posts.length > 0 ? posts : null;
    } catch (error) {
        console.error("Error getting posts by user ID:", error);
        throw new Error(error)
    }
};

export const deletePostBypostID = async (postID) => {
    try {
        const deletedPost = await userPosts.findByIdAndDelete(postID);
        return deletedPost ? deletedPost : null;
    } catch (error) {
        console.error("Error deleting post by ID:", error);
        throw new Error(error)
    }
};

export const updatePostByPostID = async (id, data) => {
    try {
        const { caption, imageURL } = data;
        const updatedPost = await userPosts.findByIdAndUpdate(
            id,
            { caption, imageURL },
            { new: true }
        );
        return updatedPost ? updatedPost : null;
    } catch (error) {
        console.error("Error updating post by ID:", error);
        throw new Error(error)
    }
};

export const getALLPost = async () => {
    try {
        const posts = await userPosts.find();
        return posts;
    } catch (error) {
        console.error("Error getting all posts:", error);
        throw new Error(error)
    }
};
