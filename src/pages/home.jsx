



import React from 'react'
import Main from '../component/Main';
import Row from '../component/row';
import requests from '../requests';

const Home = () => {
  return (
    <div>
      <Main></Main>
      <Row rowID='1' title='Upcoming' fetchURL={requests.requestUpcoming}></Row>
      <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}></Row>
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}></Row>
      <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated}></Row>
      {/* <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}></Row> */}



    </div>
  )
}

export default Home;
