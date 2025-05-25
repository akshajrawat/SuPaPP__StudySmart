const mongoose = require("mongoose");

// Connecting mongodb database
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection successfull at", conn.connection.host);
  } catch (error) {
    console.error("Error :-", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
