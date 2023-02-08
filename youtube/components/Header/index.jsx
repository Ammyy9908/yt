import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import Logo from "../Icons/Logo";
function index() {
  return (
    <div className="sticky top-0 px-6 py-3 flex justify-between items-center bg-black/90 h-[66px]">
      <div className="flex gap-6 items-center">
        <button className="text-white text-2xl">
          <MdOutlineMenu />
        </button>
        <div>
          <Logo />
        </div>
      </div>

      <div className=" bg-[#121212] h-[40px] flex items-center rounded-full pl-2 overflow-hidden bg-transparent border border-[#303030]">
        <div
          className="relative flex items-center gap-1 w-[572px] h-full group bg-transparent cursor-text"
          tabIndex={1}
        >
          <span className=" text-white absolute top-[50%] -translate-y-[50%] group-focus:-left-0 -left-12 transition-all">
            <HiOutlineSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className=" px-5 outline-none  h-full w-full bg-transparent pointer-events-none"
          />
        </div>
      </div>

      <div className="w-8 h-8 bg-gray-300 rounded-full">
        <img
          src="https://randomuser.me/api/portraits/men/97.jpg"
          alt="user-avatar"
          className="rounded-full h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default index;
