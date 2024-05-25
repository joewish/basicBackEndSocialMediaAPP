import mongoose from "mongoose";
import { userLikesSchema } from "../schema/like.schema.js";

const Like = mongoose.model('Likes', userLikesSchema);

export const addUserLikes = async (data) => {
    try {
        const { userID, postID } = data;
        const userLike = new Like({ userID, postID });
        await userLike.save();
    } catch (error) {
        console.error("Error adding user like:", error);
        throw new Error(error);
    }
};

export const getLikesByID = async (postId) => {
    try {
        const post = await Like.findOne({ postID: postId });
        return post ? post : null;
    } catch (error) {
        console.error("Error getting post by ID:", error);
        throw new Error(error);
    }
};
