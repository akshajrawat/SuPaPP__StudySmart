// Import constatnts
const constants = require("../Utils/constants");

// Middleware logic
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || res.statusCode || 500;
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

    case constants.CONFLICT:
      res.json({
        title: "Can not proceed further",
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
