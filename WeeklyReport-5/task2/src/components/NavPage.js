import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home'
import Logo from '../pages/Logo'
import AboutUs from '../pages/AboutUs'
import CompoB from './CompoB'

import Navbar from './Navbar'


const NavPage = () => {
  return (
   <>
    <section>
        <Routes>
         <Route path='/' element={<Logo />}/>
            <Route path='/home' element={<Home />}>
            <Route path='/home/HomePage' element={<Navbar/>}/>
            <Route path='/home/componentB' element={<CompoB />}/>
            </Route>
           

            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/contactus' element={<ContactUs />}/>
           
          
        </Routes>
    </section>
   </>
  )
}

export default NavPage