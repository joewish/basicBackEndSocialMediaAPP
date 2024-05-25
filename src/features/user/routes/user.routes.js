import express from 'express';
import {registerUser,loginUser,logoutUser,getUserProfile,updateUserdetails,getAllProfiles} from "../controller/user.controller.js"
const router = express.Router();

router.route("/signup").post(registerUser);
router.route("/signin").post(loginUser);
router.route("/logout").get(logoutUser)
router.route("/get-details/:userId").get(getUserProfile)
router.route("/get-all-details").get(getAllProfiles)
router.route("/upddate-details/:userId").put(updateUserdetails)
export default router;