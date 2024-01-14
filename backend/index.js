const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(8000, () => {
  connect();
  console.log("connected to back end");
});
