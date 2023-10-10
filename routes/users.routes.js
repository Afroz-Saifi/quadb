const expres = require("express");
const { alreadyExists } = require("../middleware/alreadyExists.middleware");
const { checkEmailExistence } = require("../middleware/emailAuth.middleware");
const { insertNewUser, deleteUser, getImage } = require("../controller/users.cotroller");

const UserRouter = expres.Router();

// create a new user details
UserRouter.post("/insert", alreadyExists, checkEmailExistence, insertNewUser);

// delte a users profile
UserRouter.delete('/delete/:id', deleteUser)

// getting image of a user
UserRouter.get("/image/:user_id", getImage)

module.exports = { UserRouter };
