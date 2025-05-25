# THIS IS A STEP BY STEP GUIDE FOR FUTURE USE ABOUT BACKEND :-

### HOW TO START? :-

- First setup a npm project and install Express.js
- Make a js file server.js and set it up as an basic Express App.

**LIKE THIS :-**

```js
// Basic Setup

const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

// Routes

const authRoute = require("./Routes/authRoutes");

// middlewares

app.use(express.json());
app.use("/SuPaPP/auth", authRoute);

// Running port

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

- Next make a routes folder inside which all the routes will be maintained.
- you can use routes as a middleware as shown in above code.

**Make Route File like this :-**

```js
// Baic setup

const express = require("express");
const router = express.Router();

// Controllers
const { register, login } = require("../Controllers/authControllers");

// routes

// Path :- /SuPaPP/auth/login
router.post("/login", login);

// Path :- /SuPaPP/auth/register
router.post("/register", register);

.....and so on.

module.exports = router;
```

- To handle the login of each path we need to setup a new folder called controller.
- make the controller folder and file inside it

**Like this :-**

```js
// Basic imports
const asyncHandler = require("express-async-handler");

// Controllers
const register = asyncHandler((req, res) => {
  res.send("register");
});

const login = asyncHandler((req, res) => {
  res.send("login");
});

module.exports = {
  login,
  register,
};
```

- Next we need some custom middlewares to handle errors
- we will create a folder util for constants.js and Middleware for errorhandler.js
- constants.js will just hold some error constatnts like :-

```js
const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

module.exports = STATUS_CODES;
```

- Now we will use these constants in errorhandler.js like this:-

```js
// Import constatnts
const { constants } = require("../Utils/constants");

// Middleware logic
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.SUCCESS:
      res.json({
        title: "succesfull",
        message: err.message,
        stack: err.stack,
      });
      break;

    case constants.CREATED:
      res.json({
        title: "Created",
        message: err.message,
        stack: err.stack,
      });
      break;

    case constants.BAD_REQUEST:
      res.json({
        title: "Bad request",
        message: err.message,
        stack: err.stack,
      });
      break;

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stack: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stack: err.stack,
      });
      break;

    case constants.INTERNAL_ERROR:
      res.json({
        title: "Internal server error",
        message: err.message,
        stack: err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
```

- Dont forget to implement it in your server.js

```js
const errorHandler = require("./Middleware/errorHandler");
app.use(errorHandler);
```

- next you can create models using mongoose in MODELS folder

**SAMPLE :-**

```js
// Import mongoose
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// Basic User Schema

const userModel = new Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  otp: {
    type: string,
  },
});

const User = model("User", userModel);

module.exports = User;
```
