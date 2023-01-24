import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home'
import Logo from '../pages/Logo'
import AboutUs from '../pages/AboutUs'


const NavPage = () => {
  return (
   <>
    <section>
        <Routes>
         <Route path='/' element={<Logo />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/contactus' element={<ContactUs />}/>
          
        </Routes>
    </section>
   </>
  )
}

export default NavPage