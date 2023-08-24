import React from 'react';
import disney from '/images/disney.png';
import marvel from '/images/marvel.png';
import pixar from '/images/pixar.png';
import nationalG from '/images/nationalG.png';
import starwar from '/images/starwar.png';

import disneyV from '/videos/disney.mp4';
import nationalGeographicV from '/videos/national-geographic.mp4';
import marvelV from '/videos/marvel.mp4';
import starwarsV from '/videos/star-wars.mp4';
import pixarV from '/videos/pixar.mp4';



const ProductionsHouse = () => {
    const ProductionHouseList =[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:pixar,
            video:pixarV
        },
        {
            id:4,
            image:nationalG,
            video:nationalGeographicV
        },

        {
            id:5,
            image:starwar,
            video:starwarsV
        },

        
    ]
  return (
    <div className='flex gap-2  md:gap-5 px-5 p-2 md:px-16'>
      {
        ProductionHouseList.map((name) =>(
           <div key={name.id} className='relative border-[2px]border-gray-600 rounded-lg 
           hover:scale-110 transition-all duration-300 ease-out cursor-pointer
            shadow-xl shadow-gray-800 border-[4px] border-white'>
            <video src={name.video} autoPlay playsInline loop muted 
            className='absolute top-0 opacity-0 hover:opacity-50'/>
             <img src={name.image} className='w-full  '/>
             
           </div>
        ))
      }
    </div>
  )
}

export default ProductionsHouse
