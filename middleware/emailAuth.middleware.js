const emailExistence = require("email-existence");

// Middleware to check if the email exists
const checkEmailExistence = (req, res, next) => {
  const { user_email } = req.body; // Assuming the email is in the request body

  emailExistence.check(user_email, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Email check failed" });
    }

    if (!result) {
      return res.status(400).json({ message: "Email does not exist" });
    }

    // If the email exists, proceed to the next middleware/route handler
    next();
  });
};

module.exports = { checkEmailExistence };
