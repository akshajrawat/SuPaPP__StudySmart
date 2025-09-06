// Basic Setup

const express = require("express");
require("dotenv").config();
const connectDb = require("./Config/connectDb");
const cookieParser = require("cookie-parser");

// Routes for using in middleware
const cors = require("cors");
const authRoute = require("./Routes/authRoutes");
const chatRoute = require("./Routes/chatRoutes");
const cryptoRoutes = require("./Routes/cryptoRoutes");
const shopRoutes = require("./Routes/shopRoutes");
const workspaceRoutes = require("./Routes/workspaceRoutes");
const errorHandler = require("./Middleware/errorHandler");
const { app, server } = require("./lib/socket");

// Connecting to database
connectDb();

// setting up app
const port = process.env.PORT || 3000;

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
app.use("/SuPaPP/crypto", cryptoRoutes);
app.use("/SuPaPP/shop", shopRoutes);
app.use("/SuPaPP/workspace", workspaceRoutes);
app.use(errorHandler);

// Running port

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
