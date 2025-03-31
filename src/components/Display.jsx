import React from "react";
import { Routes,Route } from "react-router-dom";
import  DisplayHome  from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";

const Display = () => {return(
<div className="w-[100%] m-2 mt-0 px-6  rounded bg-[#121212] flex-col  text-white owerflow-auto lg:w-[75%] lg:ml-0">
    <Routes>
        <Route path="/" element={<DisplayHome/>} />
        <Route path="/album/:id" element={<DisplayAlbum/>} />
    </Routes>
</div>
);
};

export default Display;
