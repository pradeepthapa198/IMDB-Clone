import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({moviedata}) => {
  return (
    <div className='mt-10 max-w-[1400px] mx-auto'>
        <h1 className='text-white text-[24px] uppercase font-semibold'>title</h1>
        <div className='h-full w-full mt-10 grid grid-cols-4  gap-y-10'>
       {moviedata.map((data)=>{
        return<>
        <Link to={`/movie/${data.id}`}>
       <div className='h-[300px] w-[300px] border-[1px] rounded-lg overflow-hidden hover:scale-[1.1] duration-500'>
         <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" className='h-full w-full'/>
       </div>
       </Link>
         
        </>
     })}
    </div>
    </div>
  )
}

export default Card
