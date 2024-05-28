import React from 'react'
import Searchbar from '../components/searchfeed/searchbar'
import Feeds from '../components/search-results-feed/feeds'
import Navbar from '../components/navbar/nav'
function Searchresults() {
  
  return (
    <div>
    <Navbar/>
    <Searchbar/>
    <Feeds/>
    </div>
  )
}

export default Searchresults