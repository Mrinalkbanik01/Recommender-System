import React from 'react'

export default function SignUp() {
  return (
    <div className="login-box">
      <form action=''>
        <h2>Login</h2>
        <div className='input-box'>
            <span className='icon'></span>
            <input type='text' required/>
            <label>Name</label>
        </div>
        <div className='input-box'>
            <span className='icon'></span>
            <input type='text' required/>
            <label>Username</label>
        </div>
        {/* <div className='input-box'>
            <span className='icon'></span>
            <input type='password' required/>
            <label>Password</label>
        </div> */}
        <div className='input-box'>
            <span className='icon'></span>
            <input type='email' required/>
            <label>E-mail</label>
        </div>
        <div className='input-box'>
            <span className='icon'></span>
            <input type='password' required/>
            <label>Password</label>
        </div>
        <div className='remember-forget'>
            <label><input type="checkbox"/>Remember me</label>
            <a href='/'>Forgot Password</a>
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>

  )
}
