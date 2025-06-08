import React from "react";

const RerenderMessage = ({ item, isReceiver }) => {
  return (
    <div
      className={`${
        isReceiver ? "self-start" : "self-end"
      } max-w-[70%] lg:max-w-[50%]`}
    >
      {item.media && (
        <div className="w-[200px] h-[200px] overflow-hidden rounded-xl mt-2">
          <img
            src={item.media}
            alt="Chat media"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {item.text && (
        <p
          className={`${
            isReceiver
              ? "bg-blue-600 dark:bg-[#5C6AC4] after:border-r-[10px] after:border-t-[8px] after:border-r-blue-600 dark:after:border-r-[#5C6AC4] after:left-0 after:-translate-x-2"
              : "bg-gray-700 dark:bg-[#3E3B5B] after:border-l-[10px] after:border-t-[8px] after:border-l-gray-700 dark:after:border-l-[#3E3B5B] after:right-0 after:translate-x-2"
          } mt-4 px-3 py-2 rounded-2xl relative after:h-0 after:w-0 after:border-b-[8px] after:border-b-transparent after:border-t-transparent after:absolute after:translate-y-1 text-white`}
        >
          {item.text}
        </p>
      )}
    </div>
  );
};

export default React.memo(RerenderMessage);
