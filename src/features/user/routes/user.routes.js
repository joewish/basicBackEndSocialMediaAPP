import express from 'express';
import {registerUser,loginUser} from "../controller/user.controller.js"
const router = express.Router();

router.route("/singup").post(registerUser);
router.route("/singin").post(loginUser);
export default router;