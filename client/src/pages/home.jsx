import React from 'react';
import Navbar from '../components/navbar/nav.jsx';
import Rent from '../components/rentbuysell/rent.jsx';
import Search from '../components/search/search.jsx';
import Test from '../components/test/test.jsx';

function Home() {
  return (<div>
    <Navbar/>
    <Test/>
    <Search/>
    <Rent/>
    </div>
  )
}

export default Home
