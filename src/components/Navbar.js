import TwitterLogo from "../assets/icons/twitter.png";
import shubhamProfilePhoto from "../assets/shubhamProfile.png";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-5">
      <div className="flex ">
        <img src={TwitterLogo} className="w-8 mr-5" alt="" />
        <input
          className="px-3 rounded-md placeholder:text-gray-400 bg-darkBlue"
          type="text"
          placeholder="# Explore"
        />
      </div>
      <div className="flex items-center text-gray">
        <Navlink
          title="Home"
          icon="home"
          className="text-twitter "
          active="inline"
          hovered="true"
        />
        <Navlink title="Explore" icon="sparkles" className="" />
        <Navlink title="Messages" icon="envelope" className="" />
        <Navlink title="Notification" icon="bell" className="" />

        <div className="w-[1px] h-8 bg-white/20"></div>

        <div className="flex items-center p-1 pr-2 ml-4 space-x-2 rounded-full bg-slate-600">
          <img className="w-8 rounded-full" src={shubhamProfilePhoto} alt="" />
          <span className="text-sm">Shubham</span>
          <i className="relative fi fi-sr-caret-down top-[2px]"></i>
        </div>
        <i className="mx-4 fi relative top-[2px] fi-sr-grid"></i>
      </div>
    </div>
  );
};

export default Navbar;
