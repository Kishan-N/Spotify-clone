import React from 'react'
import  NavBar  from "./NavBar";
import  Albums  from "./Albums";
import  Songs  from "./Songs";
import { albumsData, songsData } from '../assets/frontend-assets/assets';

const DisplayHome = () => {
    
  return (
    <>
    <NavBar/>
    <div>
        <h1 className='my-3 text-bold text-2xl'>Featured Charts</h1>
        <div className='flex  overflow-auto gap-4'>{albumsData.map((item,id) =><Albums key={id}  name={item.name} desc={item.desc} image={item.image} id={item.id}/>)}</div>
    </div>
    <div>
        <h1 className='my-3 text-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto gap-4'>{songsData.map((item,id) =><Songs key={id}  name={item.name} desc={item.desc} image={item.image} id={item.id}/>)}</div>
    </div>
    </>
  );
};

export default DisplayHome