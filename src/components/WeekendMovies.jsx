import React from 'react';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

const WeekendMovies = ({movie}) => {
  return (
    <div className=''>
       <img src={IMAGE_BASE_URL+movie.backdrop_path} 
      className='min-w-[260px] md:w-[80px] hover:border-[3px]
       border-gray-400 rounded-lg hover:scale-110 transition-all duration-100 ease-in'/>
       <h2 className='min-w-[260px] md:w-[80px] text-[18px] mt-3 truncate'>{movie.title}</h2>
    </div>
  )
}

export default WeekendMovies
