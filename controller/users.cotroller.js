const { Users } = require("../models/index");

const insertNewUser = async (req, res) => {
  try {
    const data = await Users.create(req.body);
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
