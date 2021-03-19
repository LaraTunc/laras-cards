const router = require("express").Router();
const { sendCard } = require("./handlers");

router.post("/sendCard",sendCard);


module.exports = router; 