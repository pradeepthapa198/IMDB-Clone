import React from 'react'

import { useState,useEffect } from 'react'
import Navbar from './Navbar';
import Crousal from './Crousal';

const Home = () => {
    const [moviedata,setmoviedata]=useState([]);
useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWNiOTM3MjhlMWNmMjM5NDllMjY3ZDFiNTMzNTM4MSIsIm5iZiI6MTcyODAyMjc3OS4xNDAxMDQsInN1YiI6IjY2YmI0YzU0OGIwOWI5ODMwODA2MjE4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c1ne7HEvzvQQTuUjIoVAlevDEs1d9gLiSJvyhrP4sbs'
        }
      };
      const fetchdata=async()=>{
            const res =await  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            const data =await res.json()
            console.log(data.results)
            setmoviedata(data.results)
        }
        fetchdata()
  
},[])

  return (
    <div className='h-full w-full bg-black'>
         <Navbar/>
         <Crousal moviedata={moviedata} />
       
    </div>
  )
}

export default Home
