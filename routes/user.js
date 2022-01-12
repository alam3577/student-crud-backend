const express = require("express");
const {
  getAllUsers,
  getUserById,
  deleteUserById,
  addUser,
  updateUser,
} = require("../controllers/user");
const router = express.Router();

router.post("/user/adduser", addUser);
router.get("/users", getAllUsers);
router.get("/user/:userId", getUserById);
router.delete("/user/delete/:userId", deleteUserById);
router.put("/user/update/:userId", updateUser);

module.exports = router;
