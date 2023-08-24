import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import WeekendMovies from './WeekendMovies';

const screenWidth=window.innerWidth;

const MovieList = ({GenreId, index_}) => {

  const [moviesList, setMoviesList] =useState([]);
  const elementRef=useRef();

  useEffect(() =>{
    getMoviesgenreId();
  },[]);
const getMoviesgenreId =()=>{
  GlobalApi.getMovieByGenreId(GenreId).then(resp=>{
    console.log(resp.data.results);
    setMoviesList(resp.data.results)
  })
}

const sliderRight=(element)=>{
  element.scrollLeft+=screenWidth-110
}
const sliderLeft=(element)=>{
  element.scrollLeft-=screenWidth-110
}
  return (
      <div>
         <HiChevronLeft className={`
          hidden md:block text-white text-[30px] absolute
          mx-4  cursor-pointer z-10  ${index_%3==0 ?'mt-[80px]':'mt-[180px]'}
         `} 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className={`
          hidden md:block text-white text-[30px] absolute
          mx-4 right-0 cursor-pointer z-10  ${index_%3==0 ?'mt-[80px]':'mt-[180px]'}
         `} 
        onClick={()=>sliderRight(elementRef.current)}/>
      
    <div className='flex overflow-x-auto scrollbar-none gap-8 pt-5 px-3 pb-10 scroll-smooth' ref={elementRef}>
      {moviesList.map((item,index)=>(
       <>
         {index_%3==0?<WeekendMovies movie={item}/> :
         <MovieCard movie={item}/>}
       </>
      ))}
    </div>
    </div>
  )
}

export default MovieList
