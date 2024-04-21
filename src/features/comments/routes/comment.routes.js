import express from 'express';
import {getCommentById,postNewComment,deleteAComment,updateAComments} from "../controller/comment.controller.js" 
const router = express.Router();
import jwtAuth from "../../../middlewares/auth.middleware.js"

router.route("/:id").get(jwtAuth,getCommentById);
router.route("/:id").post(jwtAuth,postNewComment);
router.route("/:id").delete(jwtAuth,deleteAComment);
router.route("/:id").put(jwtAuth,updateAComments);

export default router;