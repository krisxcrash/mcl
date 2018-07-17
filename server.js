const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/", express.static(__dirname + "/public"));

app.listen(PORT, console.log("Server is running on PORT " + PORT));
