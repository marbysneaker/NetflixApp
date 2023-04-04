import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'



const Home = () => {
  return (
    <div>
        <Main/>
        <Row title = 'Up coming' fetchUrl = {request.requestUpcoming}/>
        <Row title = 'Top Rated' fetchUrl = {request.requestTopRated}/>
        <Row title = 'Trending' fetchUrl = {request.requestTrending}/>
        <Row title = 'Up coming' fetchUrl = {request.requestUpcoming}/>
        <Row title = 'Up coming' fetchUrl = {request.requestUpcoming}/>
    </div>
  )
}

export default Home