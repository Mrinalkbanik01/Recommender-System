import React from 'react'

export default function SignUp() {
  return (
    // <body>
    <div className="login-box">
      <form action=''>
        <h2>Login</h2>
        <div className='input-box'>
            {/* <span className='icon'></span> */}
            <input type='text' required/>
            <label>Name</label>
        </div>
        <div className='input-box'>
            {/* <span className='icon'></span> */}
            <input type='text' required/>
            <label>Username</label>
        </div>
        {/* <div className='input-box'>
            <span className='icon'></span>
            <input type='password' required/>
            <label>Password</label>
        </div> */}
        <div className='input-box'>
            {/* <span className='icon'></span> */}
            <input type='email' required/>
            <label>E-mail</label>
        </div>
        <div className='input-box'>
            {/* <span className='icon'></span> */}
            <input type='password' required/>
            <label>Password</label>
        </div>
        <div className='remember-forgot'>
            <label><input type="checkbox"/>Remember me</label>
            <a href='/'>Forgot Password</a>
        </div>
        <div className='but'><button type='submit'>Sign Up</button></div>
        <div className='already'>
            <p>Already have an account.      
            <a href='/'>Click here</a></p>
        </div>
      </form>
     </div>
    // </body>    
  )
}
