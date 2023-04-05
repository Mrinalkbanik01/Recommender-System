import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import './Signup.css'

export default function SignUp() {
  const navigate=useNavigate();

  return (
    <div className="login-box">
      <form action=''>
        <h2>SIGN UP</h2>
        <div className='input-box'>
            <input type='text' required/>
            <label>Name</label>
        </div>
        <div className='input-box'>
            <input type='text' required/>
            <label>Username</label>
        </div>
        <div className='input-box'>
            <input type='email' required/>
            <label>E-mail</label>
        </div>
        <div className='input-box'>
            <input type='password' required/>
            <label>Password</label>
        </div>
        <div className='remember-forgot'>
            <label><input type="checkbox"/>Remember me</label>
            <a href='/'>Forgot Password</a>
        </div>
        <div className='but'>
          <Link className='btn' type='submit' to='/login' onClick={()=>{
          navigate("/login")
        }}>Submit</Link>
        </div>
        {/* <div className='already'>
            <p>Already have an account.      
            <a href='/'>Click here</a></p>
        </div> */}
      </form>
    </div> 
  )
}
