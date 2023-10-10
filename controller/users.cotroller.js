const { Users } = require("../models/index");
const bcrypt = require("bcryptjs");

// creating a new user
const insertNewUser = async (req, res) => {
  try {
    const { user_password } = req.body;
    const hashPass = bcrypt.hashSync(user_password, 8);
    const data = await Users.create({ ...req.body, user_password: hashPass });
    return res.status(200).json({
      success: true,
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

// get details of a user
const getDetails = async (req, res) => {
  try {
    const {user_id} = req.params
    const user = await Users.findOne({
      where: {
        "user_id": user_id
      }
    })
    if(user){
      return res.status(200).json({
        user_details: user
      })    
    }else{
      return res.status(404).json({
        error: "user not found"
      })
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

// update details
const updateUser = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const new_details_of_user = req.body;
    const [updatedRowsCount] = await Users.update(new_details_of_user, {
      where: { user_id: userId },
    });

    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'User details updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// deleting a users details
const deleteUser = async (req, res) => {
  try {
    const data = await Users.destroy({
      where: { user_id: req.params.id },
    });
    return res.status(200).json({
      msg: "User deleted",
      deleted_User: data,
    });
  } catch (error) {
    return res.status(500).json({
      isError: true,
      msg: error,
    });
  }
}

// getting image of a user
const getImage = async (req, res) => {
  try {
    const {user_id} = req.params
    const user = await Users.findOne({
      attributes: ['user_image'],
      where: {
        "user_id": user_id,
      },
    });

    if (user) {
      return res.status(200).json({
        user_image: user.user_image
      })
    } else {
      return res.status(400).json({
        error: "image not found"
      })
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

// get all users details
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({})
    return res.status(200).json({
      data: users
    })    
  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
  }
}

module.exports = { insertNewUser, deleteUser, getImage, getDetails, updateUser, getAllUsers };
