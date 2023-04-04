import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'



const Home = () => {
  return (
    <div>
        <Main/>
        <Row rowId='1' title='Up coming' fetchUrl = {request.requestUpcoming}/>
        <Row rowId='2' title = 'Top Rated' fetchUrl = {request.requestTopRated}/>
        <Row rowId='3' title = 'Trending' fetchUrl = {request.requestTrending}/>
        <Row rowId='4' title = 'Up coming' fetchUrl = {request.requestUpcoming}/>
        <Row rowId='5' title = 'Up coming' fetchUrl = {request.requestUpcoming}/>
    </div>
  )
}

export default Home