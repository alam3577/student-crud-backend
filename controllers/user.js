const User = require("../models/user");

// add user
exports.addUser = (req, res) => {
  const { name, age } = req.body;
  const user = new User(req.body);
  user.save((err, user) => {
    if (err || !name || !age) {
      return res.status(400).json({
        error: "NOT able to save user in DB",
      });
    }
    res.json({
      name: user.name,
      age: user.age,
      id: user._id,
    });
  });
};

// get all users

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
};

// get user by id

exports.getUserById = async (req, res) => {
  let id = req.params.userId;
  const user = await User.findOne({
    _id: new mongodb.ObjectID(id),
  });
  res.status(200).send(user);
};

// delete user by id

exports.deleteUserById = async (req, res) => {
  let id = req.params.userId;
  const user = await User.findByIdAndDelete({
    _id: id,
  });
  res.status(200).send(user);
};

// update user

exports.updateUser = async (req, res) => {
  let id = req.params.userId;
  User.findByIdAndUpdate(
    { _id: id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to update this user",
        });
      }
      res.json(user);
    },
  );
};
