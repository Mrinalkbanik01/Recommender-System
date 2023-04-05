import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import './Login.css'
export default function Login() {
  const navigate=useNavigate();
  return (
    <div className="login-box1">
      <form action=''>
        <h2 className='b1'>SIGN IN</h2>
        <div className='input-box1'>
            <input type='email' required/>
            <label>E-mail</label>
        </div>
        <div className='input-box1'>
            <input type='password' required/>
            <label>Password</label>
        </div>
        <div className='remember-forgot1'>
            <label><input type="checkbox"/>Remember me</label>
            <a href='/'>Forgot Password</a>
        </div>
        <div className='but1'>
          <Link className='btn1' to='/welcome' onClick={()=>{
          navigate("/welcome")
        }}>LOGIN</Link>
        </div>
      </form>
    </div> 
  )
}
