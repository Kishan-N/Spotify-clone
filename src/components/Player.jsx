import React from "react";
import { assets, songsData } from "../assets/frontend-assets/assets";

const Player = () => {
  return (
    <div className="h-[10%] bg-black flex items-center justify-between text-white px-4 ">
      <div className="hidden lg:flex items-center gap-4">
        <img
          src={songsData[0].image}
          alt="Song Cover"
          className="w-14 h-14 rounded-sm"
        />
        <div>
          <p className=" font-semibold cursor-pointer">Finding Her</p>
          <p className="text-gray-400 text-sm cursor-pointer">
            Kushagra, Bharath, Saaheal
          </p>
        </div>
        <img src={assets.like_icon} className="w-4 cursor-pointer"></img>
      </div>
      <div className="flex-1 flex-col items-center gap-4 m-auto">
        <div className="flex items-center justify-center gap-4 mb-2">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} />
          <img className="w-4 cursor-pointer" src={assets.play_icon} />
          <img className="w-4 cursor-pointer" src={assets.next_icon} />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} />
        </div>
        <div className="flex items-center justify-center gap-5 ">
          <p className="text-gray-400 flex text-xs">0:03</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-600 rounded-full flex cursor-pointer">
            <hr className="h-1 border-none w-20 bg-white rounded-full" />
          </div>
          <p className="text-gray-400 flex text-xs ">3:27</p>
        </div>
      </div>
      <div className="flex  items-center justify-center gap-4">
          <img className="w-4 cursor-pointer" src={assets.plays_icon} />
          <img className="w-4 cursor-pointer" src={assets.mic_icon} />
          <img className="w-4 cursor-pointer" src={assets.queue_icon} />
          <img className="w-4 cursor-pointer" src={assets.speaker_icon} />
          <img className="w-4 cursor-pointer" src={assets.volume_icon} />
        <div className="h-1 w-[10vw] max-w-[100px] bg-gray-600 rounded-full cursor-pointer">
          <hr className="h-1 border-none w-1/3 bg-white rounded-full" />
        </div>
          <img className="w-4 cursor-pointer" src={assets.mini_player_icon} />
          <img className="w-4 cursor-pointer" src={assets.zoom_icon} />
      </div>
    </div>
  );
};

export default Player;
