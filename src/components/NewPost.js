import { useState } from "react";
import verified from "../assets/icons/verified.png";
const NewPost = ({
  profile,
  name,
  tick,
  username,
  time,
  postDescription,
  postImage,
  like,
  retweet,
  comment,
  share,
}) => {
  const [likeCount, setLikeCount] = useState(+like);
  const [likeColor, setLikeColor] = useState("text-white/60");

  const updateLike = () => {
    setLikeCount(likeCount + 1);
    setLikeColor("text-red-500");
  };
  return (
    <div className="p-4 mt-4 duration-200 sm:m-0 sm:bg-transparent sm:pb-4 sm:border-b sm:border-white/20 sm:rounded-none hover:bg-darkBlue/60 rounded-xl bg-darkBlue">
      <div className="relative flex items-center gap-4 ">
        <img
          className="object-cover rounded-full h-14 w-14"
          src={profile}
          alt=""
        />
        <div>
          {name} <img className="inline w-5" src={verified} alt="" />{" "}
          <span className="text-sm text-white/50">@{username}</span>
          <p className="text-sm text-white/50">{time}</p>
        </div>
        <div className="absolute right-1 ">
          <i class="fi fi-sr-menu-dots text-white/50"></i>
        </div>
      </div>
      <div className="pl-[4.5rem] md:p-0">
        <p className="py-2 mr-1">{postDescription}</p>

        {postImage && (
          <img
            className="object-cover w-full border sm:border-none rounded-xl border-white/10 h-96"
            src={postImage}
            alt=""
          />
        )}
      </div>
      <div className="flex w-full sm:mx-auto sm:justify-evenly gap-3 md:w-auto mt-4 ml-[4.5rem]">
        <button
          onClick={updateLike}
          className="flex items-center justify-center w-32 h-12 gap-2 rounded-full sm:w-auto sm:h-auto sm:bg-transparent 2xl:px-6 group 2xl:w-auto bg-secondaryGray"
        >
          <i
            className={`mt-1 duration-200 fi fi-sr-heart ${likeColor} group-hover:text-red-500`}
          ></i>
          <span className="text-sm xl:hidden">{likeCount}</span>
        </button>
        <button className="flex items-center justify-center w-32 h-12 gap-2 rounded-full sm:w-auto sm:h-auto sm:bg-transparent 2xl:px-6 group 2xl:w-auto bg-secondaryGray">
          <i className="mt-1 duration-200 fi fi-sr-resize text-white/60 group-hover:text-green-300"></i>
          <span className="text-sm xl:hidden">{retweet}</span>
        </button>
        <button className="flex items-center justify-center w-32 h-12 gap-2 rounded-full sm:w-auto sm:h-auto sm:bg-transparent 2xl:px-6 group 2xl:w-auto bg-secondaryGray">
          <i className="mt-1 duration-200 fi fi-sr-comment text-white/60 group-hover:text-twitter"></i>
          <span className="text-sm xl:hidden">{comment}</span>
        </button>
        <button className="flex items-center justify-center w-32 h-12 gap-2 rounded-full sm:w-auto sm:h-auto sm:bg-transparent 2xl:px-6 group 2xl:w-auto bg-secondaryGray">
          <i className="mt-1 duration-200 fi fi-sr-inbox-out text-white/60 group-hover:text-yellow-400"></i>
          <span className="text-sm xl:hidden">{share}</span>
        </button>
      </div>
    </div>
  );
};

export default NewPost;
