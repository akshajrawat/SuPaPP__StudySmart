// Basic setup
const express = require("express");
const router = express.Router();

// controllers import
const tokenHandler = require("../Middleware/tokenHandler");
const {
  createWorkspace,
  getWorkspace,
} = require("../Controllers/workspaceController");

// Path :- /SuPaPP/workspace/create-workspace
router.post("/create-workspace",tokenHandler, createWorkspace);

// Path :- /SuPaPP/workspace/get-workspace
router.get("/get-workspace", getWorkspace);

module.exports = router;
