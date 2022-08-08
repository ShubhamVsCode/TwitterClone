import shubhamProfilePhoto from "../assets/shubhamProfile.png";
import NewTweetIcon from "./NewTweetIcon";
const NewTweet = () => {
  return (
    <div className="p-4 duration-200 hover:bg-darkBlue/60 sm:rounded-none sm:bg-background rounded-xl bg-darkBlue">
      <div className="flex gap-3">
        <img className="rounded-full h-14 " src={shubhamProfilePhoto} alt="" />
        <input
          className="w-full p-4 rounded-lg focus:outline-none bg-secondaryGray"
          type="text"
          placeholder="What's happening?"
        />
      </div>
      <div className="flex justify-start gap-3 pt-4 ml-16">
        <NewTweetIcon icon="picture text-green-400" title="Photo" />
        <NewTweetIcon icon="play text-blue-400" title="Video" />
        <NewTweetIcon icon="stats text-red-400" title="Poll" />
        <NewTweetIcon icon="calendar-clock text-yellow-300" title="Schedule" />
      </div>
    </div>
  );
};

export default NewTweet;
