import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createWorkshop } from "../../Store/Slice/workshopSlice";
import { LoadingSpinner } from "../../Components/Ui/Messages";
import toast from "react-hot-toast";

const WorkspaceForm = ({ handleCancelClick, setisCreatingWorkspace }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.workshop);
  const [workshop, setWorkshop] = useState({
    title: "",
    description: "",
  });

  // create new workspace
  const handleCreateClick = async () => {
    if (workshop.title.trim() !== "" && workshop.description.trim() !== "") {
      await dispatch(createWorkshop(workshop)).unwrap();
      setisCreatingWorkspace(false);
    } else {
      toast.error("All fields are mandatory");
    }
  };

  const handleChange = (e) => {
    setWorkshop((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-[#ffffff1a] backdrop-blur-sm w-screen h-screen fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="bg-white shadow-sm border border-[#dfdedeb7] rounded-2xl p-8 sm:p-10 w-11/12 sm:w-80 relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-red-500 hover:text-red-700 hover:scale-110 transition"
          onClick={handleCancelClick}
        >
          <AiOutlineClose size={20} />
        </button>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={workshop.title}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641eef] transition"
        />

        {/* Description Input */}
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={workshop.description}
          onChange={handleChange}
          className="w-full mb-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#641eef] transition"
        />

        {/* Create Button */}
        <button
          onClick={handleCreateClick}
          className="w-full bg-[#641eef] text-white py-2 rounded-lg font-semibold shadow-md hover:bg-[#4e13c6] hover:shadow-lg hover:scale-[1.02] transition"
        >
          Create
        </button>
        {loading.workshopCreating && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default WorkspaceForm;
