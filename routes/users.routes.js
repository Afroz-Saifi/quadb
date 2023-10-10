const expres = require("express");
const { alreadyExists } = require("../middleware/alreadyExists.middleware");
const { checkEmailExistence } = require("../middleware/emailAuth.middleware");
const { insertNewUser } = require("../controller/users.cotroller");

const UserRouter = expres.Router();

UserRouter.post("/insert", alreadyExists, checkEmailExistence, insertNewUser);

module.exports = { UserRouter };
