import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home'
import Logo from '../pages/Logo'
import AboutUs from '../pages/AboutUs'
// import SignUp from '../pages/SignUp'
import Error from './Error'
import Login from '../pages/Login'



const NavPage = () => {
  return (
   <>
    <div>
        <Routes>
         <Route path='/' element={<login />}></Route>
         <Route path='/logo' element={<Logo />}></Route>

            <Route path='/home' element={<Home />}>
            <Route path=":id" element={<Home />}></Route></Route>

           <Route path='/todos' element={<AboutUs />}/>
            

            <Route path='/ContactUs' element={<ContactUs />}/>
            {/* <Route path='/signup' element={<SignUp />}/> */}
            <Route path='/Login' element={<Login />}/>
            
            <Route path='/*' element={<Error/>}/>
            
          
        </Routes>
  
        </div>
        </>
  )
}

export default NavPage