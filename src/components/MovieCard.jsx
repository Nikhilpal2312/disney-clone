import React from 'react';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const MovieCard = ({movie}) => {
  return (
    <div>
      <img src={IMAGE_BASE_URL+movie.poster_path} 
      className='min-w-[200px] md:w-[80px] hover:border-[3px]
       border-gray-400 rounded-lg hover:scale-110 transition-all duration-100 ease-in'/>
    </div>
  )
}

export default MovieCard
