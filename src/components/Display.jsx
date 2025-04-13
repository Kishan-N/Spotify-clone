import React from "react";
import { Routes, Route } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import  NavBar  from "./NavBar";

const Display = () => {
  return (
    <div className="w-[100%] m-2 mt-2 px-6  rounded bg-[#121212] flex-col text-white overflow-auto lg:w-[75%] lg:ml-0">
        <NavBar/>
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
