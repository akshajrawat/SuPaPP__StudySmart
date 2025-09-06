// basic imports
const asyncHandler = require("express-async-handler");
const Workspace = require("../Models/WorkspaceModels/workspaceModel");

// title: Create a workspace
// Path :- /SuPaPP/workspace/create-workspace
// Access: @PRIVATE
const createWorkspace = asyncHandler(async (req, res) => {

    console.log("something is hitting me")
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

module.exports = {
  createWorkspace,
};
