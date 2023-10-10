const { Users } = require("../models/index");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const { user_password } = req.body;
    const hashPass = bcrypt.hashSync(user_password, 8);
    const data = await Users.create({ ...req.body, user_password: hashPass });
    return res.status(200).json({
      success: true,
      msg: "new user registered",
      user_details: data,
    });
  } catch (error) {
    return res.status(500).json({
      isError: true,
      msg: error,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { user_email, user_password } = req.body;
    const user = await Users.findOne({
      where: {
        user_email: user_email,
      },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(
      user_password,
      user.user_password
    );

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // Generate a JWT token
    const token = jwt.sign({ user_id: user.user_id }, process.env.jwt_secret, {
      expiresIn: "1h",
    }); // Replace 'your_secret_key' with your actual secret key

    return res.status(200).json({ token: token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };
