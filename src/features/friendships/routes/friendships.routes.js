import express from 'express';
import { getUserFriendsList,getUserPendingRequests,getUserToggle,sendFriendShipRequestStatus } from '../controller/friendships.controller.js';
import jwtAuth from "../../../middlewares/auth.middleware.js"
const router = express.Router();
router.route("/get-friends/:userId").get(jwtAuth,getUserFriendsList)
router.route("/get-pending-requests").get(jwtAuth,getUserPendingRequests,)
router.route("/toggle-frienship/:friendId").get(jwtAuth,getUserToggle)
router.route("/response-to-request/:friendId").post(jwtAuth,sendFriendShipRequestStatus)

export default router