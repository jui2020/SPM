import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home'
import Logo from '../pages/Logo'
import AboutUs from '../pages/AboutUs'
import CompoA from './CompoA'
import CompoB from './CompoB'
import Error from './Error'


const NavPage = () => {
  return (
   <>
    <section>
        <Routes>
         <Route path='/' element={<Logo />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/home/componentA' element={<CompoA />}/>
            <Route path='/home/componentB' element={<CompoB />}/>
            
           

            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/contactus' element={<ContactUs />}/>
            <Route path='*' element={<Error/>}/>
          
        </Routes>
    </section>
   </>
  )
}

export default NavPage