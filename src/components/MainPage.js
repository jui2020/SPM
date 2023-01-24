import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'

const MainPage = () => {
  return (
    <>
        <section>
            {/* navbar */}
            <div className='navbar' style={{bg:'blue'}}>
                <Navbar />
            </div>

            {/* navpage */}
            <div>
               <NavPage /> 
            </div>
        </section>
    </>
  )
}

export default MainPage