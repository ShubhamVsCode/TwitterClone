import React from "react";
import TrendingTweet from "./TrendingTweet";

const RightSidebar = () => {
  return (
    <>
      <div className="fixed p-4 rounded-xl right-48 bg-darkBlue w-80">
        <p className="text-lg font-semibold text-center">What's Happening</p>
        <p className="pt-2 pb-3 text-sm text-white/50">Trending in INDIA</p>
        <TrendingTweet trending="IWriteCode" tweet="97.7 K" />
        <TrendingTweet trending="iNeuron" tweet="81.6 K" />
        <TrendingTweet trending="WebDevelopment" tweet="22.1 K" />
        <TrendingTweet trending="LearnCodeOnline" tweet="86.9 K" />

        <p className="pt-3 pb-3 text-sm text-white/50">Trending in USA</p>
        <TrendingTweet trending="Tesla" tweet="112.2 K" />
        <TrendingTweet trending="Education" tweet="55.8 K" />
        <p className="py-2 mb-2 text-center rounded-full text-twitter hover:bg-secondaryGray ">
          Show More
        </p>

        <div className="text-[12px] flex flex-wrap gap-x-2 text-white/50">
          <p>Terms of Service</p>
          <p>Privacy Policy </p>
          <p>Cookie Policy </p>
          <p> Accessibility </p>
          <p>Ads info </p>
          <p> More </p>
          <p>© 2022 Twitter, Inc.</p>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
