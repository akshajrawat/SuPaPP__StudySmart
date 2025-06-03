// Basic Setup

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const connectDb = require("./Config/connectDb");
const cookieParser = require("cookie-parser");

// Connecting to database
connectDb();

// Routes for using in middleware
const cors = require("cors");
const authRoute = require("./Routes/authRoutes");
const chatRoute = require("./Routes/chatRoutes");
const errorHandler = require("./Middleware/errorHandler");

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/SuPaPP/auth", authRoute);
app.use("/SuPaPP/chat", chatRoute);
app.use(errorHandler);

// Running port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
