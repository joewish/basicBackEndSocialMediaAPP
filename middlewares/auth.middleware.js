import jwt from "jsonwebtoken";

export const jwtAuth = (req, res, next) => {
  const { jwtToken } = req.cookies;
  jwt.verify(jwtToken, "U5f89JccQPpiCtAQ", (err, decoded) => {
    if (err) res.status(401).json({ success: false, msg: "login to continue" });
    else {
      const userPayload = decoded;
      req.userId = userPayload.userId;
      next();
    }
  });
};


