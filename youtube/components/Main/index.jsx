import React from "react";
import Sidebar from "../Sidebar/index";
function index() {
  return (
    <div
      className="w-full h-full grid"
      style={{
        gridTemplateColumns: "18% 82%",
      }}
    >
      <Sidebar />
      <div className="main-content bg-black/90 h-full flex items-center justify-center">
        <h1 className="text-white text-2xl">Main Render comes Here</h1>
      </div>
    </div>
  );
}

export default index;
