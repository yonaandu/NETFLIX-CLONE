import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'


const RowList = () => {
  return (
    <div>
      <Row   title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Row
      title="Trending Now"
      fetchUrl={requests.fetchTrending}/>
      <Row
      title="Action Movies"
      fetchUrl={requests.fetchActionMovies}/>
      <Row
      title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}/>
       <Row
      title="Documentaries"
      fetchUrl={requests.fetchDocumentaries}/>
          <Row
      title="TV Shows"
      fetchUrl={requests.fetchTvShow}/>
       <Row
      title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}/>
       <Row
      title="Top-Rated  Movies"
      fetchUrl={requests.fetchTopRatedMovies}/>
       <Row
      title="Horror Movies"
      fetchUrl={requests.fecthHorrorMovies}/>
      
    </div>
  )
}

export default RowList
