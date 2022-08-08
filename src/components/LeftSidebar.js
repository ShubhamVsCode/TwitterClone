import LSFollowingCard from "./LSFollowingCard";
import shubhamProfilePhoto from "../assets/shubhamProfile.png";

const LeftSidebar = () => {
  return (
    <div className="fixed z-10 text-center left-48 2xl:left-2 lg:hidden xl:w-60 w-80">
      <div className="rounded-2xl bg-darkBlue">
        <div className="h-24 overflow-hidden rounded-t-2xl">
          <img
            src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=400"
            alt=""
          />
        </div>

        <div className="relative pb-4">
          <div className="mx-auto">
            <img
              className="relative w-20 mx-auto rounded-full -top-10 "
              src={shubhamProfilePhoto}
              alt=""
            />
          </div>
          <p className="-mt-8 text-xl">Shubham</p>
          <p className="mb-1 text-md text-white/50">@shubhamvscode</p>
          <p className="mb-1 text-sm ">Full Stack Web Developer</p>
        </div>
        <div className="flex py-4 border-t border-b justify-evenly border-white/10">
          <div>
            <p>6,644</p>
            <p>Following</p>
          </div>
          <div className="border-r border-white/10 "></div>
          <div>
            <p>7,921</p>
            <p>Followers</p>
          </div>
        </div>
        <div>
          <p className="py-5 font-semibold text-twitter">My Profile</p>
        </div>
      </div>
      <div className="p-4 mt-5 text-left rounded-2xl bg-darkBlue">
        <p className="font-semibold">Who to follow</p>
        <div className="mt-4 space-y-4">
          <LSFollowingCard
            title="Catty"
            username="cattyin"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwuH7jNPeL81pGoW0Xbc6OLLt7_YygyY_tu7P6M9GGBrc3472kP80yJ0Zs_thi6eK0JTc&usqp=CAU"
          />
          <LSFollowingCard
            title="Elon Musk"
            username="elonmusk"
            image="https://static01.nyt.com/images/2021/01/30/business/29musk-print/29musk-1-videoSixteenByNineJumbo1600.jpg"
          />
          <LSFollowingCard
            title="Facebook"
            username="facebook"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/1200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
          />
        </div>
        <p className="text-center text-twitter mt-7">Show More</p>
      </div>
    </div>
  );
};

export default LeftSidebar;
