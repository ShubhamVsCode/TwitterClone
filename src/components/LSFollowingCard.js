import React from "react";

const LSFollowingCard = ({ title, username, image }) => {
  return (
    <div className="relative flex items-center ">
      <img
        src={`${image}`}
        alt=""
        className="object-cover mr-4 rounded-full w-14 h-14"
      />
      <div>
        <p>{title}</p>
        <p className="text-sm text-white/50">@{username}</p>
      </div>

      <button className="absolute right-0 px-4 py-2 text-sm font-semibold bg-white rounded-full text-darkBlue ">
        Follow
      </button>
    </div>
  );
};

export default LSFollowingCard;
