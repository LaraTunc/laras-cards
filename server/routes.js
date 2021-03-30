const router = require("express").Router();
const {
  login,
  signUp,
  resetPassword,
  forgotPassword,
  sendCard,
  getUser,
  deleteUser,
} = require("./handlers");

router.post("/login", login);

router.post("/sign-up", signUp);

router.post("/send-card", sendCard);

router.post("/get-user", getUser);

router.post("/delete-user", deleteUser);

router.post("/reset-password", resetPassword);

router.post("/forgot-password", forgotPassword);

module.exports = router;
