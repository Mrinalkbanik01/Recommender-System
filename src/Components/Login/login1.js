import React from 'react'
export default function SignUp() {
  return (
    <div className="login-box">
      <form action=''>
        <h2>Login</h2>
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
        <div className='but'><button type='submit'>Submit</button></div>
        {/* <div className='already'>
            <p>Dont't have an account?      
            <a href='/'>Click here</a></p>
        </div> */}
      </form>
     </div> 
  )
}
