const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 8000;

var app = express();

var whitelist = ["https://larascards.netlify.app"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(require("./routes"));

const server = app.listen(PORT, function () {
  console.info("🌍 Listening on port " + server.address().port);
});
