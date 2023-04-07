import React, { useEffect, useState } from 'react'
import request from '../Request'
import axios from 'axios'


const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]
    useEffect(()=> {
        axios.get(request.requestTrending).then((response) =>{
            setMovies(response.data.results)
            console.log("its working")
        })
    },[])
    console.log(movie)
  return (
    <div className="w-full h-[550px] text-white">
    
        <div className="w-full h-full">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='aboslute w-full top-'>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                <button className='border text-white border-gray-300 py-2 px-5 ml-4'>watch Later</button>
            </div>
        </div>
    
    
    
    </div>
  )
}

export default Main