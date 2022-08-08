import React from "react";

const TrendingTweet = ({ trending, tweet }) => {
  return (
    <div className="relative px-5 py-4 -mx-4 hover:bg-secondaryGray ">
      #{trending}
      <p className="text-sm text-white/50">{tweet} Tweets</p>
      <div className="absolute top-5 2xl:hidden right-5">
        <i class="fi fi-sr-menu-dots text-white/50"></i>
      </div>
    </div>
  );
};

export default TrendingTweet;
