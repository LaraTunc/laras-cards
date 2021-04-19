const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 8000;

var app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(require("./routes"));

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + server.address().port);
});

app.get("/test", (req, res) => {
  res.send("Hello from Express!");
});
