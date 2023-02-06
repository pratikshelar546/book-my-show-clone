import React from 'react'
import { Link } from 'react-router-dom'

const PosterComponent = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className='flex flex-col items-start gap-2 mx-1 md:mx-3'>
        <div className='h-40 md:h-80'>
          <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="Movie poster" className='w-full h-full rounded-md'/>
        </div>
       <h3 className={`text-sm ${props.isDark? "text-white":"text-gray-700"}`}>{props.title}</h3>
      </div>
    </Link>
      )
}

export default PosterComponent 