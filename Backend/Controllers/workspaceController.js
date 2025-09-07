// basic imports
const asyncHandler = require("express-async-handler");
const Workspace = require("../Models/WorkspaceModels/workspaceModel");
const User = require("../Models/userModel");

// title: Create a workspace
// Path :- /SuPaPP/workspace/create-workspace
// Access: @PRIVATE
const createWorkspace = asyncHandler(async (req, res) => {
  // get title and description from req
  const { title, description } = req.body;

  //   check whether title is present or not
  if (!title || title.trim() == "") {
    res.status(400);
    throw new Error("Title is mandatory");
  }

  //   create workspace
  const newWorkspace = await Workspace.create({
    title: title,
    description,
  });

  res.status(201).json({
    message: "Workspace has been created successfully",
    workspace: newWorkspace,
  });
});

// title: get all workspace for a specific user
// Path :- /SuPaPP/workspace/get-workspace
// Access: @PRIVATE
const getWorkspace = asyncHandler(async (req, res) => {
  // get user id from req.user
  const { id } = req.user;

  // check if the id is not present and if the user with the following id exoist or not
  if (!id) {
    res.status(400);
    throw new Error("Failed to get th user id");
  }
  const user = await User.findById(id);
  if (!user) {
    res.status(404);
    throw new Error("There is no user with the provided id");
  }

  // get all the workspace with the createdBy as userId
  const allWorkspaces = await Workspace.find({ createdBy: user._id });
  if (allWorkspaces.length === 0) {
    res.status(200).json({ message: "No workspace yet" });
  } else {
    res
      .status(200)
      .json({
        message: "Successfully fetched workspaces",
        workspace: allWorkspaces,
      });
  }
});

module.exports = {
  createWorkspace,
  getWorkspace,
};
