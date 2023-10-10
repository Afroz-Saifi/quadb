const { Users } = require("../models/index");

const alreadyExists = async (req, res, next) => {
  try {
    const { user_email } = req.body;
    const alreadyUserCheck = await Users.findAll({
      where: {
        "user_email": user_email,
      },
    });
    if (alreadyUserCheck.length > 0) {
      return res.status(400).json({
        error: "Email already exists",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { alreadyExists };
