const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
  } catch (err) {
    throw err;
  }
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth", authRoute);

app.listen(8000, () => {
  connect();
  console.log("Server is running");
});
