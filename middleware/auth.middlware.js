const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.jwt_secret);
    if (decoded) {
      next();
    } else {
      return res
        .status(400)
        .json({ msg: "you are not authorized for this route" });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { authUser };
