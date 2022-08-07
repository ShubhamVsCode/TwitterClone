import React from "react";

const NewTweetIcon = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-2 px-8 py-2 border-2 rounded-full border-secondaryGray ">
      <i className={` drop-shadow-xl mt-[4px] fi fi-sr-${icon}`}></i>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default NewTweetIcon;
