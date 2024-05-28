import './search.css'

import React from 'react'

function Search() {
  return (
    <div className='search-main-border'>
        <div className='heading'>
        <h2><sup>︽</sup> Rentify</h2>
        <h4>Where renting meets simplicity</h4>
        </div>
        <form>
        <select id="city" name="options" className='dropdown'>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hydrabad">Hydrabad</option>
            <option value="Mumbai">Mumbai</option>
        </select>
        <input type="text" name="searchdata" id="searchdata" placeholder='Enter the Location'/>
        <button>🔎 Search</button>
        <br />
        <select id="BHK" name="options" className='dropdown'>
            <option value="" disabled selected>BHK</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4">4 BHK</option>
            <option value="4+" >4+ BHK</option>
        </select>
        <label htmlFor="BHK-options"></label>
        <select id="price" name="options" className='dropdown'>
            <option value="" disabled selected>Price</option>
            <option value="15">10k - 15k</option>
            <option value="20">15k - 20k</option>
            <option value="25">20k - 25k</option>
            <option value="25+">25k+</option>
        </select>
        <select id="days" name="options" className='dropdown'>
            <option value="" disabled selected>Availabilty</option>
            <option value="15">Within 15 days</option>
            <option value="30">30 days</option>
            <option value="60">60 days</option>
            <option value="60+">60+ days</option>
        </select>
        </form>
    </div>
  )
}

export default Search

