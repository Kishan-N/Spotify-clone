import React from "react";
import NavBar from "./NavBar";
import AlbumSongs from "./AlbumSongs";
import { useParams } from "react-router-dom";
import { albumsData, assets } from "../assets/frontend-assets/assets";
import { songsData } from "../assets/frontend-assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  return (
    <>
      <div className="mt-12 flex ">
        <img className="w-47 h-47 rounded-sm" src={albumData.image} />
        <p className="mt-5 ml-8">
          <p>Playlist</p>
          <h1 className="pb-4 text-7xl font-bold">{albumData.name}</h1>
          <p className="pb-2">{albumData.desc}</p>
          <div className="flex items-center space-x-2">
            <img className="w-5" src={assets.spotify_logo} />
            <p className="font-semibold flex">
              Spotify <span className="font-extrabold ml-1">·</span>
            </p>
            <p className="font-light">1,135,278 Likes</p>
            <p className="font-semibold flex">
              50 Songs <span className="font-light">, about 2 hrs 30 mins</span>
            </p>
          </div>
        </p>
      </div>
      <div className="overflow-auto">
        <table className="table-auto lg:table-fixed w-full text-left mt-8">
          <thead className="border-b border-gray-400">
            <tr>
              <th className="pb-4 px-3 font-light text-gray-400 w-[5%]">#</th>
              <th className="pb-4 font-light text-gray-400 w-[20%]">Title</th>
              <th className="pb-4 font-light text-gray-400 w-[30%]">Album</th>
              <th className="pb-4 font-light text-gray-400 w-[30%]">Date Added</th>
              <th className="pb-4">
                <img className="w-4" src={assets.clock_icon}></img>
              </th>
            </tr>
          </thead>
          <tbody>
            {songsData.map((item, id) => (
              <AlbumSongs
                key={id}
                rowNumber={id + 1}
                songName={item.name}
                albumName={albumData.name}
                duriation={item.duration}
                image={item.image}
                id={item.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DisplayAlbum;
