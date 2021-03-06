const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return next(err);
      req.user = {
        userId: decoded.userId,
        email: decoded.email,
        username: decoded.username,
        token
      };
      next();
    });
  } else {
    res.status(401).json({ success: false, msg: "Token not found" });
  }
};
