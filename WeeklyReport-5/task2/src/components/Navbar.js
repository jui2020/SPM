import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {

    
    return (
        <>
            <div style={{ background: 'Grey', color: 'white', display: 'flex', fontSize: 'large', width: '100%' }}>
                <NavLink to='/' style={{ textAlign: 'center', width: '25%', textDecoration: 'none', color: 'white' }}><p > lOGO</p></NavLink>
                <NavLink to='/home' style={{ textAlign: 'center', width: '25%', textDecoration: 'none', color: 'white' }}><p > Home </p></NavLink>
                <NavLink to='/aboutus' style={{ textAlign: 'center', width: '25%', textDecoration: 'none', color: 'white' }}><p > About Us</p></NavLink>
                <NavLink to='/contactus' style={{ textAlign: 'center', width: '25%', textDecoration: 'none', color: 'white' }}><p > Contact us</p></NavLink>
                </div>

                <div style={{textAlign:'center'}}>
                <NavLink to='/*' style={{textAlign:'center', fontWeight:'bolder',textDecoration: 'none', color: 'black', fontSize:'50px'}}>Error 404 : Page Not found</NavLink>

            </div>
        </>
    )
}

export default Navbar