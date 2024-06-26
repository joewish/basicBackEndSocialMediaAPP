import jwt from "jsonwebtoken";

const jwtAuth = async (req, res, next) => {
  const { jwtToken } = req.cookies;
  jwt.verify(jwtToken, "U5f89JccQPpiCtAQ", (err, data) => {
    if (err) {
      res.status(400).send("unauthorized! login to continue!");
    } else {
      console.log("data is", data);
      req._id = data._id;
      req.user = data.user;
      next();
    }
  });
};

export default jwtAuth
