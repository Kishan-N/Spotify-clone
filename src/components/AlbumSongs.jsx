import React, { useEffect, useState } from 'react';



const AlbumSongs = ({ rowNumber,songName,albumName, duriation, id, image }) => {

  return (
    <tr className="cursor-pointer hover:backdrop-brightness-300 group">
      <td className="rounded-l px-3 py-3">{rowNumber}</td>{/*ID*/}
      <td className="py-3 items-center"><div className='flex gap-3 group-hover:font-bold'><img className="w-6 rounded " src={image} alt="" />{songName}</div></td> {/*Title*/}
      <td className="py-3 font-light text-gray-400 group-hover:font-bold group-hover:text-white ">{albumName}</td>{/*Album*/}
      <td className="py-3 font-light text-gray-400">{/*desc*/}5 days ago</td>{/*Date Added*/}
      <td className="rounded-r py-3 font-light text-gray-400">{duriation}</td>{/*Time*/}
    </tr>
  );
};

export default AlbumSongs;