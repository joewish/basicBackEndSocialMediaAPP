import express from 'express';

import {getPosts} from "../controller/like.controller.js"

const router = express.Router()
import jwtAuth from "../../../middlewares/auth.middleware.js"

router.route("/:postID").get(jwtAuth,getPosts)

export default router