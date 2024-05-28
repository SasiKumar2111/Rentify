import "../Login/login.css"
import React, { useState } from 'react'
import Navbar from "../navbar/nav"
import axios from "axios"

function Signup() {
  const [firstname,setFirstName]=useState()
  const [lastname,setLastName]=useState()
  const [mail,setMail]=useState()
  const [password,setPassword]=useState()
 const handleSubmit = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8006/signup",{firstname,lastname,mail,password})
  }
  return (
    <div>
    <Navbar/>
    <hr />
    <div className="login">
      <div className="login-border">
        <form action="" onSubmit={handleSubmit}>
        <h1>Create new account</h1><br />
        <label htmlFor="">ENTER YOUR FirstName</label><br /><br />
        <input type="text" value={firstname} onChange={(e)=> setFirstName(e.target.value)} /><br /><br />

        <label htmlFor="">ENTER YOUR LastName</label><br /><br />
        <input type="text" value={lastname} onChange={(e)=> setLastName(e.target.value)} /><br /><br />

        <label htmlFor="">ENTER YOUR EMAIL</label><br /><br />
        <input type="text" value={mail} onChange={(e)=> setMail(e.target.value)} /><br /><br />

        <label htmlFor="">ENTER YOUR PASSWORD</label><br /><br />
        <input className="pass" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} /><br /><br /><br />

        <input className="submit" type="submit" value="SIGN UP" />
        <br /><br />
        </form>
        <label htmlFor=""></label>
      </div>
    </div>
    </div>
  )
}

export default Signup