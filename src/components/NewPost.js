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
    <div className="p-4 mt-4 duration-200 hover:bg-darkBlue/60 rounded-xl bg-darkBlue">
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
      <div className="pl-[4.5rem]">
        <p className="py-2 mr-1">{postDescription}</p>

        {postImage && (
          <img
            className="object-cover w-full border rounded-xl border-white/10 h-96"
            src={postImage}
            alt=""
          />
        )}
      </div>
      <div className="flex w-full gap-3 mt-4 ml-[4.5rem]">
        <button
          onClick={updateLike}
          className="max-w-[8rem] flex items-center justify-center gap-2 group rounded-full w-32 h-12 bg-secondaryGray"
        >
          <i
            className={`mt-1 duration-200 fi fi-sr-heart ${likeColor} group-hover:text-red-500`}
          ></i>
          <span className="text-sm xl:hidden">{likeCount}</span>
        </button>
        <button className="max-w-[8rem] flex items-center justify-center gap-2 group rounded-full w-32 h-12 bg-secondaryGray">
          <i className="mt-1 duration-200 fi fi-sr-resize text-white/60 group-hover:text-green-300"></i>
          <span className="text-sm xl:hidden">{retweet}</span>
        </button>
        <button className="max-w-[8rem] flex items-center justify-center gap-2 group rounded-full w-32 h-12 bg-secondaryGray">
          <i className="mt-1 duration-200 fi fi-sr-comment text-white/60 group-hover:text-twitter"></i>
          <span className="text-sm xl:hidden">{comment}</span>
        </button>
        <button className="max-w-[8rem] flex items-center justify-center gap-2 group rounded-full w-32 h-12 bg-secondaryGray">
          <i className="mt-1 duration-200 fi fi-sr-inbox-out text-white/60 group-hover:text-yellow-400"></i>
          <span className="text-sm xl:hidden">{share}</span>
        </button>
      </div>
    </div>
  );
};

export default NewPost;
