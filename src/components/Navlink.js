const Navlink = ({ title, icon, hovered, className, active }) => {
  let mainDivClassName = "";
  if (hovered) {
    mainDivClassName = "px-3 py-[7px] mx-4 rounded-full bg-white group";
  } else {
    mainDivClassName = "mx-4 group";
  }

  return (
    <>
      <div className={`${mainDivClassName}`}>
        <i className={`fi fi-sr-${icon} relative top-[2px] ${className}`}></i>
        {active && (
          <span className={`text-black sm:hidden text-sm font-semibold ml-2`}>
            {title}
          </span>
        )}
      </div>
    </>
  );
};

export default Navlink;
