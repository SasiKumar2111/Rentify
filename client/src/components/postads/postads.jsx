import React, { useState } from "react";
import "./postads.css";
import { Link } from "react-router-dom";
import axios from "axios";
function Postads() {
  const[name,setName]= useState('');
  const[mail,setMail]= useState('');
  const[location,setLocation]= useState('');
  const[bhk,setBhk]= useState('');
  const[availability,setAvailability]= useState('');
  const[rent,setRent]= useState('');
  const[sqfeet,setSqfeet]= useState('');

  const collectData = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8006/postads",{name,mail,location,bhk,availability,rent,sqfeet,})
  }


  return (
    <div>
      <hr />
      <div className="postads">
        <div className="postads-border">
          <Link className="back" to="/">⬅&nbsp;&nbsp;&nbsp;Back</Link>
          <h1>  Rentify</h1>
          <label className="subtitle">Post your property to get quick tenents</label>
          <br /><br />
          <form onSubmit={collectData}>
          <br /><label htmlFor="">Enter your Name :</label><br /><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br /><br />

          <label htmlFor="">Enter your E-Mail id :</label><br /><br />
          <input type="text" value={mail} onChange={(e) => setMail(e.target.value)}/><br /><br /><br />

          <label htmlFor="">Enter your Location</label><br /><br />
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/><br /><br /><br />

          <label htmlFor="">How many Bedrooms in the house ?</label><br /><br />
          <input type="number" value={bhk} onChange={(e) => setBhk(e.target.value)} defaultValue={0}/><br /><br /><br />

          <label htmlFor="">How many availability you need to get the home ready to occupy ?</label><br /><br />
          <input type="number" value={availability} onChange={(e) => setAvailability(e.target.value)} defaultValue={0} /><br /><br /><br />

          <label htmlFor="">How much is the expected Rent?</label><br /><br />
          <input type="number" value={rent} onChange={(e) => setRent(e.target.value)} defaultValue={0}/><br /><br /><br />

          <label htmlFor="">How many sq.feet?</label><br /><br />
          <input type="number" value={sqfeet} onChange={(e) => setSqfeet(e.target.value)} defaultValue={0}/><br /><br /><br />

          <label htmlFor="">Upload a image of the house</label><br /><br />
          <input className="image-input" type="file" id="myFile" name="filename" accept="image/png,image/jpeg,image/jpg"/>
          <br />
          <br />
          <br />
          <div className="button">
          <input className="submit" type="submit" value="Post" />
          <br /><br />
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Postads;
