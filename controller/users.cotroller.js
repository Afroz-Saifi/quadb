const { Users } = require("../models/index");
const bcrypt = require("bcryptjs");

const insertNewUser = async (req, res) => {
  try {
    const { user_password } = req.body;
    const hashPass = bcrypt.hashSync(user_password, 8);
    const data = await Users.create({ ...req.body, user_password: hashPass });
    return res.status(200).json({
      msg: "new user added",
      user_details: data,
    });
  } catch (error) {
    return res.status(500).json({
      isError: true,
      msg: error,
    });
  }
};

module.exports = { insertNewUser };
