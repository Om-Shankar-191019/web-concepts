const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  let auth = req.headers.authorization;
  console.log(auth);
  const tokenArray = auth.split(" ");
  const token = tokenArray[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    res.status(404).json({ message: "authorization failed." });
  }
}

module.exports = verifyToken;
