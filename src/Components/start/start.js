import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import './Start.css'
export default function Start() {
  const navigate=useNavigate();

  return (
    <>
    <div className='full'>
      <Link className='container box1' to="/login" onClick={()=>{
        navigate("/login")
      }}>LOGIN</Link>
      <Link className='container box2' to="/signup" onClick={()=>{
        navigate("/signup")
      }}>SIGN UP</Link>
    </div>
    </>
  )
}