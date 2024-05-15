const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const User = require("./userModel");

const ejs = require("ejs");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({ path: "./config.env" });

app.use(morgan("dev"));

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {}).then(() => {
  console.log("*********** DB Connected Successfully ************");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/saveData", async (req, res) => {
  let newData = await User.create(req.body);
  console.log(newData);

  //   res.status(200).json({
  //     status: "success",
  //     newData,
  //   });
  res.redirect("/");
});

app.listen(process.env.PORT, () => {
  console.log("App is listening to port........ ");
});
