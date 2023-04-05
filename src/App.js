
import React from 'react'
import {BrowserRouter,Routes , Route } from 'react-router-dom';
import SignUp from './Components/SignUP/SignUp'
import Login from './Components/Login/Login'
import Welcome from './Components/Welcome/Welcome'
// import Opt from './Components/Options/Opt
import Start from './Components/Start/Start'
const App = () => {
  return (
    <>
    <BrowserRouter>
    {/* <Start/> */}
    <Routes>

      <Route path="/" element={<Start/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/welcome" element={<Welcome/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
  }
export default App;
