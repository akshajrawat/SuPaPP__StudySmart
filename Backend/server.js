// Basic Setup

const express = require("express");
require("dotenv").config();
const connectDb = require("./Config/connectDb");
const cookieParser = require("cookie-parser");

// Routes for using in middleware
const cors = require("cors");
const authRoute = require("./Routes/authRoutes");
const chatRoute = require("./Routes/chatRoutes");
const errorHandler = require("./Middleware/errorHandler");
const { app, server } = require("./lib/socket");

// Connecting to database
connectDb();

// setting up app
const port = process.env.PORT || 3000;

// middlewares
app.use(
  cors({
    origin: "https://supapp-all-purpose-app.onrender.com",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/SuPaPP/auth", authRoute);
app.use("/SuPaPP/chat", chatRoute);
app.use(errorHandler);

// Running port

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
