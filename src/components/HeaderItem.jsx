import React from 'react';

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='flex items-center gap-1 cursor-pointer text-[15px] font-regular
    hover:underline underline-offset-8 leading-5 mb-2'>
      <Icon/>
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
