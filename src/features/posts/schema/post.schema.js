import mongoose from "mongoose";

// Define the schema for user posts
const usersPostSchema = mongoose.Schema({
    userID: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User' // Assuming there is a User model that userID references
    },
    caption: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

export default usersPostSchema;
