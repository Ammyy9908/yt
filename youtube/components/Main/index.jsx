import React from "react";
import Sidebar from "../Sidebar/index";
import { selectLayout } from "../../features/appSlice";
import { useSelector } from "react-redux";
function index() {
  const layout = useSelector(selectLayout);
  return (
    <div
      className="w-full h-full grid transition-all"
      style={{
        gridTemplateColumns: layout,
      }}
    >
      <Sidebar />
      <div className="main-content bg-white h-full flex items-center justify-center border-t-2">
        <h1 className="text-black text-2xl">Main Render comes Here</h1>
      </div>
    </div>
  );
}

export default index;
