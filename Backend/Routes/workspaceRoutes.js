// Basic setup
const express = require("express");
const router = express.Router();

// controllers import
const tokenHandler = require("../Middleware/tokenHandler");
const { createWorkspace } = require("../Controllers/workspaceController");

// Path :- /SuPaPP/workspace/create-workspace
router.post("/create-workspace",  createWorkspace);

module.exports = router;
