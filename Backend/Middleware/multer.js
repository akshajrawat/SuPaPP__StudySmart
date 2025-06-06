//  import multer
const multer = require("multer");

// setup storage
const storage = multer.memoryStorage();

// create upload
const upload = multer({ storage });

module.exports = upload;
