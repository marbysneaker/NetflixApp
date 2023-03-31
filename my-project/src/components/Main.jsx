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
    <div className="w-full h-[500px] text-white">
    
        <div className="w-full h-full">

            <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            {movie?.title}{movie?.name}

        </div>
    
    
    
    </div>
  )
}

export default Main