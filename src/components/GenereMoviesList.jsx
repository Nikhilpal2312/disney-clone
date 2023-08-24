import React from 'react'
import GenresList from '../constant/GenresList'
import MovieList from './MovieList'

const GenereMoviesList = () => {
  return (
    <>
      {GenresList.genere.map((item, index)=>index<=10&& (
        <div key={item.data} className='px-8 p-8 md:px-8'>
            <h2 className='text-white text-xl font-bold'>{item.name}</h2>
            <MovieList GenreId={item.id} index_={index}/>
        </div>
      ))}
    </>
  )
}

export default GenereMoviesList
