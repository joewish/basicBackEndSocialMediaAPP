import mongoose from "mongoose";
// Define the schema for user likes
export const userLikesSchema = mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User' // Assuming there is a User model that userID references
    },
    postID: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Posts' // Assuming there is a Posts model that postID references
    }]
}, {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

