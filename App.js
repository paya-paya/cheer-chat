const express = require("express");
const app = express();
const route = require("./routes/cheer");
require("dotenv").config();

app.use(express.json())
app.use(express.static("./public"));

app.use("/api/v1/cheer", route);

console.log('start')

console.log(process.env.PORT)

app.listen(process.env.PORT || 3000);