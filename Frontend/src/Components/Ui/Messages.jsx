const SuccessMessage = ({ message }) => {
  return (
    <div className="mt-4 p-3 rounded-lg bg-green-100 text-green-800 border border-green-300">
      {message}
    </div>
  );
};

const ErrorMessage = ({ message }) => {
  return (
    <div className="mt-4 p-3 rounded-lg bg-red-100 text-red-800 border border-red-300">
      {message}
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="w-8 h-8 border-4 border-[#4fd1d9] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export { SuccessMessage, ErrorMessage, LoadingSpinner };
