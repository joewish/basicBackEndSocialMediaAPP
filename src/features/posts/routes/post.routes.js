import express from 'express';

import {getAllPosts,getPostsById,getPostByUser,createNewPost,deletePost,updatePost} from "../controller/post.controller.js"
import jwtAuth from "../../../middlewares/auth.middleware.js"
const router = express.Router();
router.route("/all").get(jwtAuth,getAllPosts)
router.route("/:id").get(jwtAuth,getPostsById)
router.route("/").get(jwtAuth,getPostByUser)
router.route("/").post(jwtAuth,createNewPost)
router.route("/:id").delete(jwtAuth,deletePost)
router.route("/:id").put(jwtAuth,updatePost)

export default router