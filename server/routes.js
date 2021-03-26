const router = require("express").Router();
const { getUser, addUser, resetPassword, forgotPassword,  sendCard } = require("./handlers");

router.post("/getUser",getUser); //login 

router.post("/addUser",addUser); // signUp

router.post("/sendCard",sendCard); // /guest/sendcard
    // /:userId/sendcard

router.post("/reset-password",resetPassword); // "/users/:user_id/reset_password"

router.post("/forgot-password",forgotPassword); // "/forgot_password"


module.exports = router; 