import { FaBell } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] fixed z-[10] bg-main-1 pl-[90px]">
      <div className="h-full flex justify-end items-center space-x-4 max-w-[1440px] mx-auto px-12">
        <div className="relative">
          <FaBell color="white" size={22} />
          <div className="absolute top-0 right-[0px] w-[9px] h-[9px] rounded-full bg-[#F7685B] border-[1.5px] border-white" />
        </div>
        <img
          src="/images/profile.png"
          alt="profile"
          className="rounded-full w-[32px]"
        />
        <p className="text-white normal-14">Akkarapol</p>
        <FaChevronDown color="white" size={7} />
      </div>
    </div>
  );
};

export default Navbar;
