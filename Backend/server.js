// Basic Setup

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const connectDb = require("./Config/connectDb");

// Connecting to database
connectDb();

// Routes for using in middleware
const cors = require("cors");
const authRoute = require("./Routes/authRoutes");
const errorHandler = require("./Middleware/errorHandler");

// middlewares
app.use(cors());
app.use(express.json());
app.use("/SuPaPP/auth", authRoute);
app.use(errorHandler);

// Running port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
