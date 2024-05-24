import express from 'express';
import {registerUser,loginUser,logoutUser} from "../controller/user.controller.js"
const router = express.Router();

router.route("/signup").post(registerUser);
router.route("/signin").post(loginUser);
router.route("/logout").get(logoutUser)
export default router;