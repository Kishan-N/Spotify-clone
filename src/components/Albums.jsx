import React from 'react';
import { useNavigate } from 'react-router-dom';

const Albums = ({name,desc,id,image}) => {

    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-4 text-white rounded courser-pointer hover:bg-gray-400'>
        <img className='rounded' src={image} alt=""/>
        <p className='font-bold'>{name}</p>
        <p className='text-sm'>{desc}</p>
    </div>
  );
};

export default Albums