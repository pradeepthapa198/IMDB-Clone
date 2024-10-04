import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Crousal = ({moviedata}) => {
  return (
    <div className=''>
        <div className='w-full'>
      <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={3}    
      infiniteLoop={true}
      showStatus={false}
      >
        {moviedata.map((data)=>{
            return <>
            <Link to={`/movie/${data.id}`}>
            <div>
                <div className='relative h-[700px]'>
                <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="" className=' rounded-lg h-full'/>
                <h1 className='text-white absolute bottom-[200px] text-[24px] left-4 font-semibold text-start max-w-[1000px]'>{data.overview}</h1>
                <h1 className='absolute bottom-[150px] text-white text-[24px] left-4 font-semibold'>{data.release_date}</h1>
                <h1  className='absolute bottom-[150px] text-white text-[24px] left-[200px] font-semibold'><i class="fa-solid fa-star"></i> {data.vote_average
                }</h1>
                </div>
            </div>
            </Link>
            </>
        })}

      </Carousel>
      </div>
    </div>
  )
}

export default Crousal
