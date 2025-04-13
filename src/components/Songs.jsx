import React from 'react';

const Songs = ({name,desc,id,image}) => {
  return (
    <div className='min-w-[180px] p-2 px-4 text-white rounded cursor-pointer hover:bg-gray-400'>
        <img className='rounded' src={image} alt=""/>
        <p className='font-bold'>{name}</p>
        <p className='text-sm'>{desc}</p>
    </div>
  );
};

export default Songs