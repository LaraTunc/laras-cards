const router = require("express").Router();
const { getSomething,  } = require("./handlers");

router.get("/bacon",getSomething);


module.exports = router; 