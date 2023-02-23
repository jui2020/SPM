import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    
    return (
        <>
            <div style={{ background: 'Grey', color: 'white', display: 'flex', fontSize: 'large', width: '100%' }}>
                <NavLink to='/logo' style={{ textAlign: 'center', width: '25%', textDecoration: 'none', color: 'white' }}><p > lOGO</p></NavLink>
                <NavLink to='/home' style={{ textAlign: 'center', width: '25%', textDecoration: 'none', color: 'white' }}><p > Home </p></NavLink>
                <NavLink to='/todos' style={{ textAlign: 'center', width: '25%', textDecoration: 'none', color: 'white' }}><p >Todos List</p></NavLink>
                <NavLink to='/contactus' style={{ textAlign: 'center', width: '25%', textDecoration: 'none', color: 'white' }}><p > Contact us</p></NavLink>
                <NavLink to='/login' style={{ textAlign: 'center', width: '25%', textDecoration: 'none', color: 'white' }}><p > SignUp</p></NavLink>

            </div>
        </>
    )
}

export default Navbar