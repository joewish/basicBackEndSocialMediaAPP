//  imports
import express from 'express';
import commentsRoute from "./src/features/comments/routes/comment.routes.js";
import postRoutes from "./src/features/posts/routes/post.routes.js";
import likeRoute from "./src/features/likes/routes/like.routes.js";
import userRoutes from "./src/features/user/routes/user.routes.js";
import userFriendsRoutes from "./src/features/friendships/routes/friendships.routes.js";
import { invalidRoutesHandlerMiddleware } from "./src/middlewares/invalidRoutes.middleware.js";
import {
  appLevelErrorHandlerMiddleware
} from "./src/middlewares/errorHandler.js";
import {loggerMiddleware,errorLoggerMiddleware} from "./src/middlewares/logger.middleware.js"
import cookieParser from 'cookie-parser';
import session from 'express-session';
const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(loggerMiddleware);
app.use(session({
  secret: 'U5f89JccQPpiCtAQ',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 900000 } // 15 minutes
}));
app.use("/api/users",userRoutes)
app.use("/api/comment",commentsRoute)
app.use("/api/posts",postRoutes)
app.use("/api/like",likeRoute)
app.use("/api/friends",userFriendsRoutes)

app.use(invalidRoutesHandlerMiddleware);

// Middleware to handle errors
app.use(appLevelErrorHandlerMiddleware);
app.use(errorLoggerMiddleware)

export default app