import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./feeds.css";

function Feeds() {
  const [housesData, setHouses] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8006/home").then((housesData) => {
      setHouses(housesData.data)
    });
  }, []);
  return (
    <div>
      <p className="search-results-heading">Search Results</p>
      <div className="main-feed-border">
        {
          housesData.map(housesData => {
            return(
            <div className="resbox">
              <img
            src={housesData.image}
            alt="cat"
          />
          <hr />
          <p>Location:{housesData.location}</p>
          <small>Rent:{housesData.rent} | {housesData.bhk}</small><br />
          <button>I'm Interested</button>
          
            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Feeds;
