import React from 'react'
import  NavBar  from "./NavBar";
import { useParams } from "react-router-dom";
import { albumsData, assets } from "../assets/frontend-assets/assets";

const DisplayAlbum = () => {
  const {id} = useParams();
  const albumData = albumsData[id];
  console.log(albumData); 
  return (
    <>
    <NavBar/>
    <div className='mt-12 flex'>
      <img className='w-47 h-47 rounded-sm' src={albumData.image}/>
      <p className='mt-10 ml-8'>
        <p>Playlist</p>
        <h1 className='pb-4 text-7xl font-bold'>{albumData.name}</h1>
        <p className='pb-2'>{albumData.desc}</p>
        <div className='flex items-center space-x-2'>
          <img className='w-5' src={assets.spotify_logo}/>
          <p className='font-semibold flex'>Spotify <span className="font-extrabold ml-1"> ·</span></p>
        </div>
      </p>
    </div>
    </>
  );
};

export default DisplayAlbum